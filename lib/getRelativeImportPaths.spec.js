import getRelativeImportPaths from './getRelativeImportPaths';
import { relativeComponentPaths } from '../test-data/constants';

test('getImportPaths should return relative paths of imports', () => {
  expect(getRelativeImportPaths()).toEqual(relativeComponentPaths);
});
