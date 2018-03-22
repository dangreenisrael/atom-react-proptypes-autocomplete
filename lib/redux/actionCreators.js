'use babel';

import { SET_RELATIVE_IMPORT_PATHS, SET_SUGGESTIONS } from './actionTypes';

export const setRelativeImportPaths = importPaths => ({
  type: SET_RELATIVE_IMPORT_PATHS,
  importPaths
});

export const setSuggestions = suggestions => ({
  type: SET_SUGGESTIONS,
  suggestions
});
