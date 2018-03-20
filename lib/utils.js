'use babel';
import { pipe, map } from 'ramda';

export const parseDocgenPropsObjectIntoArray = docgenPropsObject => {
  const propNames = Object.keys(docgenPropsObject);
  return propNames.map(name => ({
    name,
    type: docgenPropsObject[name].type.name,
    required: docgenPropsObject[name].required
  }));
};

export const parsePropIntoSnippet = ({ name, type }) =>
  name + '="${#:<' + type + '>}"';

export const flattenTemplateStringArrayIntoTemplateString = templateStrings => {
  const templatesWithNumbers = templateStrings.map((template, i) =>
    template.replace('#', i + 1)
  );
  return templatesWithNumbers.join(' ');
};

export const buildReactComponentTemplateString = (
  componentName,
  propsTemplate
) => `<${componentName} ${propsTemplate}/>`;

export const buildSnippet = docgenObject => {
  const { props, displayName } = docgenObject;
  const propsTemplate = pipe(
    parseDocgenPropsObjectIntoArray,
    map(parsePropIntoSnippet),
    flattenTemplateStringArrayIntoTemplateString
  )(props);
  return buildReactComponentTemplateString(displayName, propsTemplate);
};

export const mapDocgenToAutocomplete = docgenObject => {
  const { displayName, description } = docgenObject;
  return {
    description,
    text: displayName,
    snippet: buildSnippet(docgenObject),
    type: 'snippet',
    rightLabel: 'Component'
  };
};

export const findMatchingSuggestions = prefix => arrayOfdocgenObjects => {
  const matchingDocgenObjects = arrayOfdocgenObjects.filter(({ displayName }) =>
    displayName.startsWith(prefix)
  );
  return matchingDocgenObjects.map(mapDocgenToAutocomplete);
};
