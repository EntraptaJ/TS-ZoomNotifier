// bin/build.ts
import { promises as fs } from 'fs';
import { buildPath } from './Utils/buildPath';
import { createManifest } from './Utils/createManifest';

async function buildExtension(): Promise<void> {
  console.info('Starting to build chrome extension TS-ZoomNotifier');

  console.info(`Removing 'dist' directory`);
  await fs.rmdir('dist', { recursive: true });

  console.log('Transpiling TypeScript');
  await buildPath('./');

  // await cpDirFiles('static', 'dist');
  await createManifest();
}

buildExtension();
