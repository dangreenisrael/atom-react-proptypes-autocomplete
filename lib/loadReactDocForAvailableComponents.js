'use babel';

const readFilePromise = require('fs-readfile-promise');
const reactDocgen = require('react-docgen');
const [projectBaseDirectory] = atom.project.getPaths();

const getFileContents = path =>
  readFilePromise(path).then(buffer => buffer.toString());

const docsForAllComponents = content =>
  reactDocgen.parse(content, reactDocgen.resolver.findAllComponentDefinitions);

export default currentPath =>
  getFileContents(currentPath).then(docsForAllComponents);
