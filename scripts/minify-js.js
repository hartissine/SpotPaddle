const fs = require('fs/promises');
const path = require('path');
const vm = require('vm');
const terser = require('terser');

const rootDir = path.resolve(__dirname, '..');
const files = [
  { input: 'data.js', output: 'assets/data.min.js' },
  { input: 'script.js', output: 'assets/script.min.js' }
];

async function minifyFile({ input, output }) {
  const inputPath = path.join(rootDir, input);
  const outputPath = path.join(rootDir, output);
  const source = await fs.readFile(inputPath, 'utf8');
  const result = await terser.minify(source, {
    compress: {
      passes: 2
    },
    mangle: true,
    format: {
      ascii_only: true,
      comments: false
    }
  });

  if (result.error) {
    throw result.error;
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${result.code}\n`, 'utf8');
  return {
    input,
    output,
    before: Buffer.byteLength(source, 'utf8'),
    after: Buffer.byteLength(result.code, 'utf8')
  };
}

function compactObject(value) {
  if (Array.isArray(value)) {
    const items = value
      .map(compactObject)
      .filter(item => item !== undefined && item !== null);
    return items.length ? items : undefined;
  }

  if (!value || typeof value !== 'object') {
    return value === undefined || value === null || value === '' ? undefined : value;
  }

  const result = {};
  for (const [key, item] of Object.entries(value)) {
    const compacted = compactObject(item);
    if (compacted !== undefined && compacted !== null) {
      result[key] = compacted;
    }
  }

  return Object.keys(result).length ? result : undefined;
}

function pickGpsPoint(point) {
  return compactObject({
    lat: point?.lat,
    lon: point?.lon,
    name: point?.name,
    type: point?.type,
    confidence: point?.confidence,
    source: point?.source,
    hideSource: point?.hideSource,
    distanceToAccessMeters: point?.distanceToAccessMeters,
    fee: point?.fee
  });
}

function buildIndexLake(lake) {
  return compactObject({
    id: lake.id,
    slug: lake.slug,
    name: lake.name,
    region: lake.region,
    lat: lake.lat,
    lon: lake.lon,
    mainImage: lake.gallery?.[0] || lake.mainImage,
    description: lake.description,
    cost: lake.cost,
    isFree: lake.isFree,
    difficulty: lake.difficulty,
    paddleScore: lake.paddleScore,
    parking: {
      location: lake.parking?.location,
      cost: lake.parking?.cost
    },
    access: {
      description: lake.access?.description,
      type: lake.access?.type
    },
    accessPoint: pickGpsPoint(lake.accessPoint),
    parkingPoint: pickGpsPoint(lake.parkingPoint)
  });
}

async function buildIndexData() {
  const inputPath = path.join(rootDir, 'data.js');
  const outputPath = path.join(rootDir, 'assets/data.index.min.js');
  const source = await fs.readFile(inputPath, 'utf8');
  const context = {};

  vm.runInNewContext(`${source}\nglobalThis.__lacDatabase = lacDatabase;`, context, {
    filename: 'data.js'
  });

  const database = Array.isArray(context.__lacDatabase) ? context.__lacDatabase : [];
  const indexDatabase = database.map(buildIndexLake);
  const generated = `const lacDatabase=${JSON.stringify(indexDatabase)};`;
  const result = await terser.minify(generated, {
    compress: true,
    mangle: true,
    format: {
      ascii_only: true,
      comments: false
    }
  });

  if (result.error) {
    throw result.error;
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${result.code}\n`, 'utf8');

  return {
    input: 'data.js',
    output: 'assets/data.index.min.js',
    before: Buffer.byteLength(source, 'utf8'),
    after: Buffer.byteLength(result.code, 'utf8')
  };
}

(async () => {
  const results = await Promise.all(files.map(minifyFile));
  results.push(await buildIndexData());
  for (const result of results) {
    const saved = 100 - (result.after / result.before) * 100;
    console.log(`${result.output}: ${result.before} -> ${result.after} bytes (${saved.toFixed(1)}% smaller)`);
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
