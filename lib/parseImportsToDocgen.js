'use babel';

import { parse, resolver } from 'react-docgen';
import fs from 'fs';
import path from 'path';
import { pipe, map } from 'ramda';

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

export const getDocgenForContent = content => {
  try {
    return parse(content, resolver.findAllComponentDefinitions);
  } catch (error) {
    return [];
  }
};

const appendFileContent = (previousContent, path) =>
  path ? previousContent + fs.readFileSync(path, 'utf8') : previousContent;

export const concatFileContents = paths => {
  return paths.reduce(appendFileContent, '');
};

export const getCurrentFilePath = () => {
  const editor = atom.workspace.getActiveTextEditor();
  const buffer = editor && editor.getBuffer();
  return buffer ? buffer.getPath() : '';
};

export default pipe(
  getAbsoluteImportPaths(getCurrentFilePath()),
  map(getJsOrJsxPath),
  map(elem => elem),
  concatFileContents,
  getDocgenForContent
);
