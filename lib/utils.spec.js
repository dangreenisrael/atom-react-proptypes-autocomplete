import {
  parsePropIntoSnippet,
  parseDocgenPropsObjectIntoArray,
  flattenTemplateStringArrayIntoTemplateString,
  buildReactComponentTemplateString,
  buildSnippet
} from './utils';
import docgenOutput from '../test-data/docgenOutput';

test('buildSnippet takes a docgenObject and returns a full snippet', () => {
  expect(buildSnippet(docgenOutput[0])).toBe(
    '<FormTextInput formFieldName="${1:<string>}" inputValue="${2:<string>}" onChange="${3:<func>}"/>'
  );
});

test('buildReactComponentTemplateString should output a full react component string', () => {
  const componentName = 'MyComponent';
  const propsTemplate = 'foo="${1:<string>}" bar="${2:<number>}"';
  expect(buildReactComponentTemplateString(componentName, propsTemplate)).toBe(
    '<MyComponent foo="${1:<string>}" bar="${2:<number>}"/>'
  );
});

test('flattenTemplateStringArrayIntoTemplateString() should return props template string', () => {
  const arrayOfTemplateStrings = ['foo="${#:string}"', 'bar="${#:number}"'];
  expect(
    flattenTemplateStringArrayIntoTemplateString(arrayOfTemplateStrings)
  ).toBe('foo="${1:string}" bar="${2:number}"');
});

test('parsePropIntoSnippet({name, type}) should return `name="${#:<type>}"`', () => {
  const propObject = {
    name: 'formFieldName',
    type: 'string',
    required: true
  };
  expect(parsePropIntoSnippet(propObject)).toBe(
    'formFieldName="${#:<string>}"'
  );
});

test('parseObjectOfPropsIntoArray() should return an array of {name, type, required}', () => {
  const { props } = docgenOutput[0];
  expect(parseDocgenPropsObjectIntoArray(props)).toMatchObject([
    {
      name: 'formFieldName',
      type: 'string',
      required: true
    },
    {
      name: 'inputValue',
      type: 'string',
      required: false
    },
    {
      name: 'onChange',
      type: 'func',
      required: true
    }
  ]);
});
