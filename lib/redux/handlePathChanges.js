'use babel';

import store from './reducer';
import { setSuggestions } from './actionCreators';
import getDocs from '../parseImportsToDocgen';

const getFlattenedArray = state => {
  return state.importPaths.join();
};

let currentPaths;
const handleChange = () => {
  let previousPaths = currentPaths;
  currentPaths = getFlattenedArray(store.getState());
  if (previousPaths !== currentPaths) {
    const localPaths = store.getState().importPaths;
    store.dispatch(setSuggestions(getDocs(localPaths)));
  }
};

store.subscribe(handleChange);
