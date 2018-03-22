import { reducer, initialState } from './reducer';
import * as types from './actionTypes';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should handle SET_RELATIVE_IMPORT_PATHS', () => {
    const importPaths = ['/foo', '/bar'];
    expect(
      reducer(initialState, {
        type: types.SET_RELATIVE_IMPORT_PATHS,
        importPaths
      })
    ).toEqual({
      ...initialState,
      importPaths
    });
  });
  it('should handle SET_SUGGESTIONS', () => {
    const suggestions = [{}, { foo: 'bar' }];
    expect(
      reducer(initialState, {
        type: types.SET_SUGGESTIONS,
        suggestions
      })
    ).toEqual({
      ...initialState,
      suggestions
    });
  });
});
