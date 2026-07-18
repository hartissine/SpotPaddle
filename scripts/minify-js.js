const fs = require('fs/promises');
const path = require('path');
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

(async () => {
  const results = await Promise.all(files.map(minifyFile));
  for (const result of results) {
    const saved = 100 - (result.after / result.before) * 100;
    console.log(`${result.output}: ${result.before} -> ${result.after} bytes (${saved.toFixed(1)}% smaller)`);
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
