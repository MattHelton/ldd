import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
// import CheckBox from '../../Elements/Checkbox';
import NoGoals from './NoGoals';
import Goals from './Goals';

const GoalsList = ({ goals }) => {
  console.log(goals);
  return !goals ? <NoGoals /> : <Goals goals={goals} />;
};

GoalsList.propTypes = {
  goals: PropTypes.func.isRequired,
};

export default GoalsList;
