import React from 'react';
import * as PropTypes from 'prop-types';

const Input = ({ onChange, name }) => {
  return <input type="text" onChange={onChange} value={name} />;
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
