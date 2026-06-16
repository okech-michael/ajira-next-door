#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientDir = path.join(__dirname, '../dist/client');
const assetsDir = path.join(clientDir, 'assets');

try {
  const files = fs.readdirSync(assetsDir);
  const jsFiles = files.filter(f => f.endsWith('.js') && f.startsWith('index'));
  const cssFiles = files.filter(f => f.endsWith('.css'));
  
  if (jsFiles.length === 0) {
    throw new Error('No index-*.js file found in assets/');
  }
  
  const mainJs = jsFiles[0];
  const cssLinks = cssFiles.map(f => `<link rel="stylesheet" href="/assets/${f}">`).join('\n    ');
  
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ajira Digital Club — Kisii University</title>
    ${cssLinks}
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/assets/${mainJs}"><\/script>
  </body>
</html>`;
  
  fs.writeFileSync(path.join(clientDir, 'index.html'), html);
  console.log('✓ Generated index.html');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
