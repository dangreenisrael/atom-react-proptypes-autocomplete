'use babel';
// data source is an array of objects
import { findMatchingSuggestions } from './utils';
import loadReactDocForAvailableComponents from './loadReactDocForAvailableComponents';

class IntermediateProvider {
  constructor() {
    // offer suggestions only when editing js or jsx
    this.selector = '.source.js, .source.jsx';
  }

  getSuggestions(options) {
    const { prefix } = options;
    const findSuggestionsForReactDocs = findMatchingSuggestions(prefix);
    const currentPath = atom.workspace.getActivePaneItem().buffer.file.path;
    return loadReactDocForAvailableComponents(currentPath).then(
      findSuggestionsForReactDocs
    );
  }

  // clones a suggestion object to a new object with some shared additions
  // cloning also fixes an issue where selecting a suggestion won't insert it
}
export default new IntermediateProvider();
