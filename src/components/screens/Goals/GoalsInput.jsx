import React from 'react';
import * as PropTypes from 'prop-types';

const GoalsInput = ({ onChange, userInput }) => {
  return <input type="text" onChange={onChange} value={userInput} />;
};

GoalsInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default GoalsInput;
