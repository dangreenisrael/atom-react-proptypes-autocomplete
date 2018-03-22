'use babel';
import { SET_RELATIVE_IMPORT_PATHS, SET_SUGGESTIONS } from './actionTypes';
import { createStore } from 'redux';

export const initialState = {
  importPaths: [],
  suggestions: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RELATIVE_IMPORT_PATHS:
      const newState = {
        ...state,
        importPaths: action.importPaths
      };
      return newState;
    case SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.suggestions
      };
    default:
      return state;
  }
};

export default createStore(reducer);
