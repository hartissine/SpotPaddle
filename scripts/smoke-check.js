#!/usr/bin/env node

const SITE_ORIGIN = process.env.SPOTPADDLE_SITE_ORIGIN || 'https://spotpaddle.ca';
const WEATHER_ORIGIN = process.env.SPOTPADDLE_WEATHER_ORIGIN || 'https://meteo.spotpaddle.ca';
const LOCAL_TEST_ORIGIN = process.env.SPOTPADDLE_LOCAL_ORIGIN || 'http://127.0.0.1:5500';
const TEST_WEATHER_PATH = '/meteo.php?lat=48.47962&lon=-71.79344';

const checks = [
  {
    name: 'Site home',
    url: new URL('/', SITE_ORIGIN).toString(),
    validate: async response => response.ok
  },
  {
    name: 'Weather health',
    url: new URL('/health.php', WEATHER_ORIGIN).toString(),
    validate: async response => {
      if (!response.ok) return false;
      const data = await response.json();
      return data.status === 'ok' && data.checks?.openweather_api_key === true;
    }
  },
  {
    name: 'Weather API',
    url: new URL(TEST_WEATHER_PATH, WEATHER_ORIGIN).toString(),
    validate: async response => {
      if (!response.ok) return false;
      const data = await response.json();
      return Number(data.cod) === 200 && Boolean(data.main) && Boolean(data.wind);
    }
  },
  {
    name: 'Weather CORS local',
    url: new URL(TEST_WEATHER_PATH, WEATHER_ORIGIN).toString(),
    headers: { Origin: LOCAL_TEST_ORIGIN },
    validate: async response => {
      const allowedOrigin = response.headers.get('access-control-allow-origin');
      if (!response.ok || allowedOrigin !== LOCAL_TEST_ORIGIN) return false;
      const data = await response.json();
      return Number(data.cod) === 200 && Boolean(data.main) && Boolean(data.wind);
    }
  }
];

async function runCheck(check) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(check.url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json,text/html;q=0.9,*/*;q=0.8',
        ...(check.headers || {})
      }
    });
    const ok = await check.validate(response);
    return {
      name: check.name,
      ok,
      status: response.status,
      url: check.url
    };
  } catch (error) {
    return {
      name: check.name,
      ok: false,
      status: 'ERROR',
      url: check.url,
      error: error.message
    };
  } finally {
    clearTimeout(timeout);
  }
}

(async () => {
  const results = await Promise.all(checks.map(runCheck));

  results.forEach(result => {
    const marker = result.ok ? 'OK' : 'FAIL';
    const detail = result.error ? ` - ${result.error}` : '';
    console.log(`[${marker}] ${result.name} (${result.status}) ${result.url}${detail}`);
  });

  if (results.some(result => !result.ok)) {
    process.exitCode = 1;
  }
})();
