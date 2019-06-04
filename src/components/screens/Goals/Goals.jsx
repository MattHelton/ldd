import React, { Fragment } from 'react';
// import * as PropTypes from 'prop-types';
import CheckBox from '../../Elements/Checkbox';

const Goals = ({ goals }) => {
  const goalsArray = goals.map(goal => {
    return (
      <Fragment>
        <h1 key={goal.id} className="goals">
          {goal.title}
        </h1>
        <CheckBox />
      </Fragment>
    );
  });
  return <div>{goalsArray}</div>;
};

// Goals.propTypes = {
//   goals: PropTypes.arrayOf.isRequired,
// };

export default Goals;
