'use babel';
import fs from 'fs';
const appendFileContent = (previousContent, path) =>
  path ? previousContent + fs.readFileSync(path, 'utf8') : previousContent;

export default function parseFilesToText(paths) {
  return paths.reduce(appendFileContent, '');
}
