'use babel';
// data source is an array of objects
import { findMatchingSuggestions } from './utils';
import loadStuff from './loadReactDocForAvailableComponents';

class IntermediateProvider {
  constructor() {
    // offer suggestions only when editing plain text or HTML files
    this.selector = '.source.js, .text.html.basic';
    loadStuff();
  }

  getSuggestions(options) {
    const { prefix } = options;

    // only look for suggestions after 3 characters have been typed
    if (prefix.length >= 3) {
      return findMatchingSuggestions(prefix);
    }
  }

  // clones a suggestion object to a new object with some shared additions
  // cloning also fixes an issue where selecting a suggestion won't insert it
}
export default new IntermediateProvider();
