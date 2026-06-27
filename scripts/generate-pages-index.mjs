import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const rootDir = resolve(__dirname, '..');
const outputDir = join(rootDir, '.output', 'public');

async function getAssetName(pattern) {
  const assetsDir = join(outputDir, 'assets');
  const files = await readdir(assetsDir);
  const match = files.find((name) => pattern.test(name));
  if (!match) {
    throw new Error(`Could not find asset matching ${pattern}`);
  }
  return match;
}

async function main() {
  const [entryJs, stylesCss] = await Promise.all([
    getAssetName(/^index-[^/]+\.js$/),
    getAssetName(/^styles-[^/]+\.css$/),
  ]);

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#1a1205" />
    <title>Tea Square Cafe</title>
    <link rel="stylesheet" href="./assets/${stylesCss}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" crossorigin src="./assets/${entryJs}"></script>
  </body>
</html>
`;

  await mkdir(outputDir, { recursive: true });
  await writeFile(join(outputDir, 'index.html'), html, 'utf8');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
