import { SET_RELATIVE_IMPORT_PATHS, SET_SUGGESTIONS } from './actionTypes';
import { setRelativeImportPaths, setSuggestions } from './actionCreators';

describe('setRelativeImportPaths', () => {
  const action = setRelativeImportPaths(['/foo', '/bar']);
  it('should have an action type SET_RELATIVE_IMPORT_PATHS', () => {
    expect(action.type).toBe(SET_RELATIVE_IMPORT_PATHS);
  });
  it('should have import paths be an array of paths', () => {
    expect(action.importPaths).toMatchObject(['/foo', '/bar']);
  });
});

describe('setSuggestions', () => {
  const action = setSuggestions([{}, { foo: 'bar' }]);
  it('should have an action type SET_SUGGESTIONS', () => {
    expect(action.type).toBe(SET_SUGGESTIONS);
  });
  it('should have suggestions be an array of react docgen objects', () => {
    expect(action.suggestions).toMatchObject([{}, { foo: 'bar' }]);
  });
});
