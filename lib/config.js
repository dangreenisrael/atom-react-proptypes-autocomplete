'use babel';
const packageName = 'atom-react-proptypes-autocomplete';

export const config = {
  directoriesToScan: {
    title: 'Libraries to include',
    description: 'node-modules/foo, node-modules/bar',
    type: 'array',
    default: ['hi']
  }
};

export const onDirectoriesChanged = callback =>
  atom.config.observe(`${packageName}.directoriesToScan`, callback);
