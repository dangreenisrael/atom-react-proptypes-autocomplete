import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component for adding forms
 */
export const FormTextInput = ({ formFieldName, inputValue, onChange }) => (
  <span>
    {formFieldName} {inputValue} {onChange}
  </span>
);
FormTextInput.propTypes = {
  formFieldName: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
