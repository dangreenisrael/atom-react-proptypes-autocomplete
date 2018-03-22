'use babel';
const getRegexCaptures = (regex, string) => {
  const getCaptures = (cursor, results = []) => {
    const exp = regex.exec(string);
    if (!exp) {
      return results;
    }
    return getCaptures(exp, [...results, exp[1]]);
  };
  return getCaptures();
};

export const getRelativeImportPaths = fileContent => {
  const regex = /from '\.(.*?)'/g;
  const prependADot = string => `.${string}`;
  return getRegexCaptures(regex, fileContent).map(prependADot);
};

export const getCurrentFileContents = () => {
  const editor = atom.workspace.getActiveTextEditor();
  if (!editor) return '';
  const buffer = editor.getBuffer();
  return buffer ? buffer.getText() : '';
};

export default () => getRelativeImportPaths(getCurrentFileContents());
