'use babel';
// data source is an array of objects
import store from './redux/reducer';
import { setRelativeImportPaths } from './redux/actionCreators';
import { findMatchingSuggestions } from './utils';
import getRelativeImportPaths from './getRelativeImportPaths';

const reloadLocalImports = () => {
  store.dispatch(setRelativeImportPaths(getRelativeImportPaths()));
};
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class IntermediateProvider {
  constructor() {
    // offer suggestions only when editing js or jsx
    this.selector = '.source.js, .source.jsx';
  }

  getSuggestions(options) {
    const { prefix } = options;
    if (prefix.length < 3 || !uppercaseLetters.includes(prefix[0])) {
      return;
    }
    reloadLocalImports();
    return findMatchingSuggestions(prefix)(store.getState().suggestions);
  }

  // clones a suggestion object to a new object with some shared additions
  // cloning also fixes an issue where selecting a suggestion won't insert it
}
export default new IntermediateProvider();
