'use babel';

import fs from 'fs';
import path from 'path';
import { pipe, map } from 'ramda';
import parseFilesToDocgen from './parseFilesToDocgen';
export const getCurrentFilePath = () => {
  const editor = atom.workspace.getActiveTextEditor();
  const buffer = editor && editor.getBuffer();
  return buffer ? buffer.getPath() : '';
};

export const getAbsoluteImportPaths = currentPath => localPaths => {
  const currentDirectory = path.dirname(currentPath);
  return localPaths.map(localPath => `${currentDirectory}/${localPath}`);
};

const appendToImportPath = file => extension => file + extension;
export const getJsOrJsxPath = importPath => {
  const extensions = ['.js', '.jsx', '/index.js', '/index.jsx'];
  const possiblePaths = extensions.map(appendToImportPath(importPath));
  return possiblePaths.find(fs.existsSync);
};

export default pipe(
  getAbsoluteImportPaths(getCurrentFilePath()),
  map(getJsOrJsxPath),
  map(elem => elem),
  parseFilesToDocgen
);
