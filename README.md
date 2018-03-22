# Atom React PropTypes Autocomplete

[![Build Status on CircleCI](https://circleci.com/gh/dangreenisrael/atom-react-proptypes-autocomplete.svg?style=shield)](https://circleci.com/gh/storybooks/storybook)


## Demo


![Autocomplete proptypes demo](https://raw.githubusercontent.com/dangreenisrael/atom-react-proptypes-autocomplete/master/assets/autocomplete-demo.gif)


## About

**No setup is required.**


This is a provider for autocomplete+ that uses react docgen to come to autocomplete react components.


Currently, this only works with local imports, in the form 
```JavaScript
 import { Foo } from '../Foo';
 import Bar from './Bar';
```

It will discover `.js` and `.jsx` files. If the import path is a directory, it will look in it for an `index.js` or `index.jsx` file

## Issues

If you have any issues, please don't hesitate to [open an issue on GitHub](https://github.com/dangreenisrael/atom-react-proptypes-autocomplete/issues/new)