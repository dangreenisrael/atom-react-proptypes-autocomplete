'use babel';

import { parse, resolver } from 'react-docgen';

const getDocgenForContent = content => {
  try {
    return parse(content, resolver.findAllComponentDefinitions);
  } catch (error) {
    return [];
  }
};

export default getDocgenForContent;
