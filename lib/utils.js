'use babel';

import suggestions from '../data/intermediate';

export const mapDocgenToAutocomplete = suggestion => {
  return {
    description: suggestion.description,
    text: suggestion.displayName,
    snippet: '<FooBar thing="${1}" otherThing="${2}"/>',
    type: 'snippet',
    rightLabel: 'Component'
  };
};

export const findMatchingSuggestions = prefix => {
  const matchingDocgenObjects = suggestions.filter(({ displayName }) =>
    displayName.startsWith(prefix)
  );
  return matchingDocgenObjects.map(mapDocgenToAutocomplete);
};
