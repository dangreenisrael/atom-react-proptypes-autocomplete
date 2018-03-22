'use babel';

import store from './redux/reducer';
import './redux/handlePathChanges';
import reactDocgenProvider from './react-docgen-provider';
export default {
  getProvider() {
    return reactDocgenProvider;
  }
};
