'use babel';
// data source is an array of objects
import { findMatchingSuggestions } from './utils';
import loadReactDocForAvailableComponents from './loadReactDocForAvailableComponents';

class IntermediateProvider {
  constructor() {
    // offer suggestions only when editing plain text or HTML files
    this.selector = '.source.js, .text.html.basic';
    this.reactDocStuff = [];
    loadReactDocForAvailableComponents().then(data => {
      this.reactDocStuff = data;
    });
  }

  getSuggestions(options) {
    const { prefix } = options;
    return findMatchingSuggestions(prefix, this.reactDocStuff);
  }

  // clones a suggestion object to a new object with some shared additions
  // cloning also fixes an issue where selecting a suggestion won't insert it
}
export default new IntermediateProvider();
