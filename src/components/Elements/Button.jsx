import React from 'react';
import * as PropTypes from 'prop-types';

const Button = props => {
  return (
    <button type="button" onSubmit={props.onSubmit}>
      Add
    </button>
  );
};

Button.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Button;
