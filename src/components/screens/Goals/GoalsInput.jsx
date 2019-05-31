import React from 'react';
import * as PropTypes from 'prop-types';

const GoalsInput = ({ onChange }) => {
  return <input type="text" onChange={onChange} />;
};

GoalsInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default GoalsInput;
