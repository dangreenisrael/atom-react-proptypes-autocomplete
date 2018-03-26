import { parseFilesToText } from './parseFilesToDocgen';

test('parseFilesToText should return a string of text for an array of paths', () => {
  const a = __dirname + '/../test-data/a.txt';
  const b = __dirname + '/../test-data/b.txt';
  expect(parseFilesToText([a, b])).toBe('a\nb\n');
});
