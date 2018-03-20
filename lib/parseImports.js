'use babel';

import { parse, resolver } from 'react-docgen';
import fs from 'fs';
import path from 'path';
import { pipe, map } from 'lodash/fp';

const getRegexCaptures = (regex, string) => {
  const getCaptures = (cursor, results = []) => {
    const exp = regex.exec(string);
    if (!exp) {
      return results;
    }
    return getCaptures(exp, [...results, exp[1]]);
  };
  return getCaptures();
};

export const getRelativeImportPaths = fileContent => {
  const regex = /from '\.(.*?)'/g;
  const prependADot = string => `.${string}`;
  return getRegexCaptures(regex, fileContent).map(prependADot);
};

export const getAbsoluteImportPaths = currentPath => localPaths => {
  const currentDirectory = path.dirname(currentPath);
  return localPaths.map(localPath => `${currentDirectory}/${localPath}`);
};

export const getDocgenForContent = content => {
  try {
    return parse(content, resolver.findAllComponentDefinitions);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const appendFileContent = (previousContent, path) =>
  previousContent + fs.readFileSync(path, 'utf8');

export const concatFileContents = paths => {
  return paths.reduce(appendFileContent, '');
};

export const getCurrentFileContents = () => {
  const editor = atom.workspace.getActiveTextEditor();
  const buffer = editor.getBuffer();
  return buffer ? buffer.getText() : '';
};

export const getCurrentFilePath = () => {
  const editor = atom.workspace.getActiveTextEditor();
  const buffer = editor.getBuffer();
  return buffer ? buffer.getPath() : '';
};

const log = content => {
  console.log(content);
  return content;
};
export default currentPath => {
  // const currentFile = appendFileContent('', currentPath);
  const foo = pipe(
    getCurrentFileContents,
    getRelativeImportPaths,
    getAbsoluteImportPaths(currentPath)
    // concatFileContents
  );
  console.log(foo());
  // getFileContents(currentPath).then(file => {
  //   console.log(foo(file));
  // });
  // return currentFile;
};
