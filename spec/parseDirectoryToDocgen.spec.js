import parseDirectoryToText, {
  getJsAndJsxFileNamesInDirectory
} from '../lib/parseDirectoryToDocgen';
import docgenOutput from './test-data/docgenOutput';
const testDataDirectory = `${__dirname}/test-data/`;
const jsAndJsxFiles = ['bar.jsx', 'constants.js', 'foo.js', 'baz/index.js'];
const prependWithDirectory = file => testDataDirectory + file;
describe('getJsAndJsxFileNamesInDirectory', () => {
  it('should list all the js and jsx files in the test directory', async () => {
    const results = await getJsAndJsxFileNamesInDirectory(testDataDirectory);
    const filesToMatch = jsAndJsxFiles.map(prependWithDirectory);
    filesToMatch.forEach(fileToMatch => {
      expect(results).toContain(fileToMatch);
    });
  });
});

describe('parseNodeModuleToText', () => {
  it('should return docgen', async () => {
    const result = await parseDirectoryToText(`${testDataDirectory}/baz`);
    expect(docgenOutput).toMatchObject(result);
  });
});
