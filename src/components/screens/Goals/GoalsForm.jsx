import React from 'react';
import * as PropTypes from 'prop-types';
import AddGoal from './AddGoal';

const GoalsForm = ({ onChange, userInput, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <AddGoal onChange={onChange} userInput={userInput} />
    </form>
  );
};

GoalsForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default GoalsForm;
