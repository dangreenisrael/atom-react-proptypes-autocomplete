'use babel';

// data source is an array of objects
import suggestions from '../data/intermediate';

const inflateSuggestion = suggestion => {
  return {
    description: 'Baz',
    text: 'FooBar',
    snippet: '<FooBar thing="${1}" otherThing="${2}"/>',
    type: 'snippet',
    rightLabel: 'Component'
  };
};

const findMatchingSuggestions = prefix => {
  // filter list of suggestions to those matching the prefix, case insensitive
  let prefixLower = prefix.toLowerCase();
  let matchingSuggestions = suggestions.filter(suggestion => {
    let textLower = suggestion.displayName.toLowerCase();
    return textLower.startsWith(prefixLower);
  });

  // run each matching suggestion through inflateSuggestion() and return
  return matchingSuggestions.map(inflateSuggestion);
};

class IntermediateProvider {
  constructor() {
    // offer suggestions only when editing plain text or HTML files
    this.selector = '.source.js, .text.html.basic';
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
