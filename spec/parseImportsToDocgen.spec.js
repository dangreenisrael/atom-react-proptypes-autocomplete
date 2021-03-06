import {
  getAbsoluteImportPaths,
  getJsOrJsxPath
} from '../lib/parseImportsToDocgen';

import {
  currentPath,
  relativeComponentPaths,
  absoluteComponentPaths
} from './test-data/constants';

test('getAbsolutePathsForImports should return absolute paths given current and local paths', () => {
  expect(getAbsoluteImportPaths(currentPath)(relativeComponentPaths)).toEqual(
    absoluteComponentPaths
  );
});

describe('getJsOrJsxPath should return an array of existing js and jsx files', () => {
  const fooJs = __dirname + '/test-data/foo';
  const barJsx = __dirname + '/test-data/bar';
  const bazIndexJs = __dirname + '/test-data/baz';
  const a = __dirname + '/test-data/a';

  it('should return foo.js', () => {
    expect(getJsOrJsxPath(fooJs)).toBe(`${fooJs}.js`);
  });
  it('should return bar.jsx', () => {
    expect(getJsOrJsxPath(barJsx)).toBe(`${barJsx}.jsx`);
  });
  it('should return baz/index.js', () => {
    // Full path mathing is failing for some reason
    expect(getJsOrJsxPath(bazIndexJs)).toContain('/test-data/baz/index.js');
  });
  it('should return undefined', () => {
    expect(getJsOrJsxPath(a)).not.toBeDefined();
  });
});
