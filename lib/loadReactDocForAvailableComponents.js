'use babel';

const path = require('path');
const recursive = require('recursive-readdir');
const readFilePromise = require('fs-readfile-promise');
const reactDocgen = require('react-docgen');
const [projectBaseDirectory] = atom.project.getPaths();

const startsWithCapitalLetter = filePath => {
  const fileName = path.basename(filePath);
  return fileName[0] !== fileName[0].toLowerCase();
};

const hasValidExtension = filePath =>
  filePath.slice(-3) === '.js' || filePath.slice(-4) === '.jsx';
const getComponentPaths = () =>
  recursive(`${projectBaseDirectory}/src`).then(files =>
    files.filter(startsWithCapitalLetter).filter(hasValidExtension)
  );

const getFileContents = path =>
  readFilePromise(path).then(buffer => buffer.toString());

const docsForAllComponents = content =>
  reactDocgen.parse(content, reactDocgen.resolver.findAllComponentDefinitions);

export default () =>
  getFileContents(
    '/Users/dgreen/wave/src/next-wave/src/components/AutoCompleteAddressFormField.js'
  ).then(docsForAllComponents);
