const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'node_modules', 'leaflet', 'dist');
const targetDir = path.join(rootDir, 'assets', 'vendor', 'leaflet');

if (!fs.existsSync(sourceDir)) {
  throw new Error('Leaflet is not installed. Run npm install first.');
}

fs.rmSync(targetDir, { recursive: true, force: true });
fs.mkdirSync(targetDir, { recursive: true });

for (const fileName of ['leaflet.css', 'leaflet.js', 'leaflet.js.map']) {
  fs.copyFileSync(path.join(sourceDir, fileName), path.join(targetDir, fileName));
}

fs.cpSync(path.join(sourceDir, 'images'), path.join(targetDir, 'images'), {
  recursive: true
});

console.log(`Leaflet assets copied to ${path.relative(rootDir, targetDir)}`);
