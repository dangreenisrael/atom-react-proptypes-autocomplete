# Atom React PropTypes Autocomplete. - WIP

[![Build Status on CircleCI](https://circleci.com/gh/dangreenisrael/atom-react-proptypes-autocomplete.svg?style=shield)](https://circleci.com/gh/storybooks/storybook)


This is a provider for autocomplete+ that uses react docgen to come to pre-fill proptypes for components.

Currently, this only works with local imports, in the form 
```JavaScript
 import { Foo } from '../Foo';
 import Bar from './Bar';
```

It will discover `.js` and `.jsx` files. If the import path is a directory, it will look in it for an `index.js` or `index.jsx` file
