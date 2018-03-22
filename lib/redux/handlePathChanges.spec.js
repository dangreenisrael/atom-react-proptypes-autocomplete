import store from './reducer';
import { setRelativeImportPaths, setSuggestions } from './actionCreators';
import './handlePathChanges';

const dispatchSpy = jest.spyOn(store, 'dispatch');
describe('handlePathChanges', () => {
  beforeAll(() => {
    store.dispatch(setRelativeImportPaths([]));
  });
  beforeEach(() => {
    dispatchSpy.mockClear();
  });
  it('should ignore when no path changed', () => {
    store.dispatch(setRelativeImportPaths([]));
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });
  it('should dispatch getDocs on a path change', () => {
    store.dispatch(setRelativeImportPaths(['hi', 'ho']));
    expect(dispatchSpy).toHaveBeenCalledTimes(2);
    expect(dispatchSpy).toHaveBeenCalledWith(setSuggestions([]));
  });
});
