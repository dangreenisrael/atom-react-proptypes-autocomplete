'use babel';
// data source is an array of objects
import { path } from 'ramda';
import { findMatchingSuggestions } from './utils';
import loadReactDocForAvailableComponents from './parseImports';

let suggestionList = [];
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class IntermediateProvider {
  constructor() {
    // offer suggestions only when editing js or jsx
    this.selector = '.source.js, .source.jsx';
    this.loadImportedComponents();
    atom.workspace.onDidChangeActivePaneItem(this.loadImportedComponents);
    this.loadImportedComponents = this.loadImportedComponents.bind(this);
  }

  getSuggestions(options) {
    const { prefix } = options;
    if (prefix.length < 3 || !uppercaseLetters.includes(prefix[0])) {
      return;
    }
    return findMatchingSuggestions(prefix)(suggestionList);
  }

  loadImportedComponents() {
    const activePanel = atom.workspace.getActivePaneItem();
    const currentPath = path(['buffer', 'file', 'path'], activePanel);
    if (currentPath) {
      suggestionList = loadReactDocForAvailableComponents(currentPath);
    }
  }

  // clones a suggestion object to a new object with some shared additions
  // cloning also fixes an issue where selecting a suggestion won't insert it
}
export default new IntermediateProvider();
