import parseimports, {
  getRelativeImportPaths,
  getAbsoluteImportPaths,
  concatFileContents
} from './parseImports';

const importText = `
import Foo from './Foo';
import Bar from '../Bar';
import { Baz } from '../../Baz';
`;
const currentPath = '/user/me/src/one/two/Component.js';
const relativeComponentPaths = ['./Foo', '../Bar', '../../Baz'];
const absoluteComponentPaths = [
  '/user/me/src/one/two/./Foo',
  '/user/me/src/one/two/../Bar',
  '/user/me/src/one/two/../../Baz'
];

const absoluteFilePaths = [
  '/user/me/src/one/two/Foo.js',
  '/user/me/src/one/Bar.jsx',
  '/user/me/src/Baz/index.js'
];

test('getImportPaths should return relative paths of imports', () => {
  expect(getRelativeImportPaths(importText)).toEqual(relativeComponentPaths);
});

test('getAbsolutePathsForImports should return absolute paths given current and local paths', () => {
  expect(getAbsoluteImportPaths(currentPath)(relativeComponentPaths)).toEqual(
    absoluteComponentPaths
  );
});
test('concatFileContents should return a string of text for an array of paths', () => {
  const a = __dirname + '/../test-data/a.txt';
  const b = __dirname + '/../test-data/b.txt';
  expect(concatFileContents([a, b])).toBe('a\nb\n');
});
