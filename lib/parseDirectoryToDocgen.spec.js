import parseDirectoryToText, {
  getJsAndJsxFileNamesInDirectory
} from './parseDirectoryToDocgen';
import docgenOutput from '../test-data/docgenOutput.json';
const testDataDirectory = `${process.cwd()}/test-data/`;
const jsAndJsxFiles = [
  'bar.jsx',
  'constants.js',
  'foo.js',
  'test-setup.js',
  'baz/index.js'
];
const prependWithDirectory = file => testDataDirectory + file;
describe('getJsAndJsxFileNamesInDirectory', () => {
  it('should list all the js and jsx files in the test directory', async () => {
    const results = await getJsAndJsxFileNamesInDirectory(testDataDirectory);
    expect(results).toMatchObject(jsAndJsxFiles.map(prependWithDirectory));
  });
});

describe('parseNodeModuleToText', () => {
  it('should return docgen', async () => {
    const result = await parseDirectoryToText(`${testDataDirectory}/baz`);
    expect(docgenOutput).toMatchObject(result);
  });
});
