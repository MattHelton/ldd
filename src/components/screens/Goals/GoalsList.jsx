import React from 'react';
import * as PropTypes from 'prop-types';
import NoGoals from './NoGoals';
import Goals from './Goals';

const GoalsList = ({ goals }) => {
  return !goals ? <NoGoals /> : <Goals goals={goals} />;
};

GoalsList.propTypes = {
  goals: PropTypes.instanceOf(Object).isRequired,
};

export default GoalsList;
