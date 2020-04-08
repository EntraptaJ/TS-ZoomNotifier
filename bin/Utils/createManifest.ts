// bin/Utils/createManifest.json
import { promises as fs } from 'fs';

const manifest: chrome.runtime.Manifest = {
  manifest_version: 2,
  name: 'TS-ZoomNotifier',
  version: '0.0.1',
  permissions: [],
  content_scripts: [
    {
      matches: ['https://zoom.us/wc/*/start'],
      js: ['index.js'],
    },
  ],
};

export async function createManifest(): Promise<void> {
  const manifestJSON = JSON.stringify(manifest);

  return fs.writeFile('dist/manifest.json', manifestJSON);
}
