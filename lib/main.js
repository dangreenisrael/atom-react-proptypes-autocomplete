'use babel';

import './redux/handlePathChanges';
import { config } from './config';
import reactDocgenProvider from './react-docgen-provider';
export default {
  getProvider() {
    return reactDocgenProvider;
  },
  config
};
