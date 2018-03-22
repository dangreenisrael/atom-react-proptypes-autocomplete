import { currentPath, importText } from './constants';
const getPath = () => currentPath;
const getText = () => importText;
const getBuffer = () => ({ getPath, getText });
const getActiveTextEditor = () => ({ getBuffer });
global.atom = { workspace: { getActiveTextEditor } };
