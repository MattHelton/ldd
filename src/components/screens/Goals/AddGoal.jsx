import React, { Fragment } from 'react';
// import * as PropTypes from 'prop-types';
import Button from '../../Elements/Button';
import GoalsInput from './GoalsInput';

const AddGoal = ({ onChange, onSubmit }) => {
  return (
    <Fragment>
      <GoalsInput onChange={onChange} />
      <Button onSubmit={onSubmit} />
    </Fragment>
  );
};

// AddGoal.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };

export default AddGoal;
