#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.resolve(__dirname, '..');
const SITE_ORIGIN = process.env.SPOTPADDLE_SITE_ORIGIN || 'https://spotpaddle.ca';
const LAKE_PAGE_VERSION = process.env.SPOTPADDLE_LAKE_PAGE_VERSION || '';

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function loadLakes() {
  const dataPath = path.join(ROOT_DIR, 'data.js');
  const dataSource = fs.readFileSync(dataPath, 'utf8');
  const context = { console };
  vm.createContext(context);
  vm.runInContext(`${dataSource}\nglobalThis.__lacDatabase = lacDatabase;`, context, {
    filename: dataPath
  });

  if (!Array.isArray(context.__lacDatabase)) {
    throw new Error('lacDatabase was not found in data.js');
  }

  return context.__lacDatabase;
}

function buildUrl(pathname, params = {}) {
  const url = new URL(pathname, SITE_ORIGIN);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== '') url.searchParams.set(key, value);
  });
  return url.toString();
}

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: buildUrl('/'), priority: '1.0', changefreq: 'weekly' },
    { loc: buildUrl('/index.html'), priority: '1.0', changefreq: 'weekly' },
    { loc: buildUrl('/mentions-legales.html'), priority: '0.3', changefreq: 'yearly' },
    { loc: buildUrl('/politique-confidentialite.html'), priority: '0.3', changefreq: 'yearly' }
  ];

  loadLakes()
    .filter(lake => lake && lake.slug)
    .sort((a, b) => String(a.slug).localeCompare(String(b.slug)))
    .forEach(lake => {
      urls.push({
        loc: buildUrl('/lac.html', {
          lake: lake.slug,
          v: LAKE_PAGE_VERSION
        }),
        priority: '0.8',
        changefreq: 'monthly'
      });
    });

  const body = urls.map(url => `  <url>
    <loc>${xmlEscape(url.loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
fs.writeFileSync(sitemapPath, buildSitemap(), 'utf8');
console.log(`Generated ${path.relative(ROOT_DIR, sitemapPath)}`);
