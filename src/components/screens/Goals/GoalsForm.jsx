import React from 'react';
import * as PropTypes from 'prop-types';
import AddGoal from './AddGoal';

const GoalsForm = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <AddGoal onChange={onChange} onSubmit={onSubmit} />
    </form>
  );
};

GoalsForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default GoalsForm;
