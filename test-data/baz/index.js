import React from 'react';
import PropTypes from 'prop-types';
export const Foo = ({ name }) => <span> {name} </span>;
Foo.propTypes = {
  name: PropTypes.string.isRequired
};
