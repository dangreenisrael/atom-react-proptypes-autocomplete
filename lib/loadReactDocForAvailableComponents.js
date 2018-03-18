'use babel';

const dir = require('node-dir');
const path = require('path');
const recursive = require('recursive-readdir');

const startsWithCapitalLetter = filePath => {
  const fileName = path.basename(filePath);
  return fileName[0] !== fileName[0].toLowerCase();
};

const hasValidExtension = filePath =>
  filePath.slice(-3) === '.js' || filePath.slice(-4) === '.jsx';

export default () => {
  const [projectBaseDirectory] = atom.project.getPaths();

  recursive(`${projectBaseDirectory}/src`).then(files => {
    const possibleComponentFiles = files
      .filter(startsWithCapitalLetter)
      .filter(hasValidExtension);
    console.log(possibleComponentFiles.length);
  });
};
