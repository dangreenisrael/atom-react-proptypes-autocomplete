'use babel';
import fs from 'fs';
import { parse, resolver } from 'react-docgen';
import { pipe } from 'ramda';

const appendFileContent = (previousContent, path) =>
  path ? previousContent + fs.readFileSync(path, 'utf8') : previousContent;

export const parseFilesToText = paths => paths.reduce(appendFileContent, '');

export const getDocgenForContent = text => {
  try {
    return parse(text, resolver.findAllComponentDefinitions);
  } catch (error) {
    return [];
  }
};

export default function parseFilesToDocgen(paths) {
  return pipe(parseFilesToText, getDocgenForContent)(paths);
}
