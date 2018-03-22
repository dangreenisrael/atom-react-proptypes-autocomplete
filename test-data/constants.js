'use babel';

export const importText = `
import Foo from './Foo';
import Bar from '../Bar';
import { Baz } from '../../Baz';
`;
export const currentPath = '/user/me/src/one/two/Component.js';
export const relativeComponentPaths = ['./Foo', '../Bar', '../../Baz'];
export const absoluteComponentPaths = [
  '/user/me/src/one/two/./Foo',
  '/user/me/src/one/two/../Bar',
  '/user/me/src/one/two/../../Baz'
];

export const absoluteFilePaths = [
  '/user/me/src/one/two/Foo.js',
  '/user/me/src/one/Bar.jsx',
  '/user/me/src/Baz/index.js'
];
