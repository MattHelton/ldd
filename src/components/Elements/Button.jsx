import React from 'react';
import * as PropTypes from 'prop-types';

const Button = ({ onSubmit }) => {
  return (
    <button type="button" onSubmit={onSubmit}>
      Add
    </button>
  );
};

Button.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Button;
