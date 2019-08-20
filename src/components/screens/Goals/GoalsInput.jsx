import React from 'react';
import * as PropTypes from 'prop-types';

const GoalsInput = ({ onChange, title }) => {
  return <input type="text" onChange={onChange} value={title} />;
};

GoalsInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default GoalsInput;
