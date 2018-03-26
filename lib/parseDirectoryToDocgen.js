'use babel';
import readDirRecursive from 'recursive-readdir';
import path from 'path';
import parseFilesToDocgen from './parseFilesToDocgen';
const ignoreFunc = (file, stats) => {
  const extension = path.extname(file);
  const isFile = !stats.isDirectory();
  const isNeitherJSnorJSX = extension !== '.js' && extension !== '.jsx';
  const isHidden = file[0] === '.';
  const isVendor = file === 'node_modules';
  return isHidden || isVendor || (isFile && isNeitherJSnorJSX);
};

export const getJsAndJsxFileNamesInDirectory = directory =>
  new Promise(resolve => {
    readDirRecursive(directory, [ignoreFunc], function(err, files) {
      if (err) {
        throw new Error(err);
      }
      resolve(files);
    });
  });

export default async function parseDirectoryToText(directory) {
  const filesToParse = await getJsAndJsxFileNamesInDirectory(directory);
  return parseFilesToDocgen(filesToParse);
}
