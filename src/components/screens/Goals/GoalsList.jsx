import React, { Fragment } from 'react';
import Checkbox from '../../Elements/Checkbox';

const goalsArray = goals.data.map(goal => (
  <Fragment key={goal.id}>
    <h1 className="goals">{goal.title}</h1>
    <Checkbox />
  </Fragment>
));
const GoalsList = () => {
    return (
    );
}
 
export default GoalsList;
const GoalsList = () => {
  const { goals } = this.props.goals;
  
};

export default GoalsList;

if (!goals) {
  <div>No goals to display</div>;
} else {
  <div className="goals-list">{goalsArray}</div>;
}
