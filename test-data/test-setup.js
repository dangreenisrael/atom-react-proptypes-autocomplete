import { currentPath, importText } from './constants';
const getPath = () => currentPath;
const getText = () => importText;
const getBuffer = () => ({ getPath, getText });
const getActiveTextEditor = () => ({ getBuffer });
const config = { observe: () => {} };
global.atom = { workspace: { getActiveTextEditor }, config };
