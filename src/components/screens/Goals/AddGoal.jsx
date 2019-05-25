import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import Button from '../../Elements/Button';
import GoalsInput from './GoalsInput';

const AddGoal = ({ onChange, userInput, onSubmit }) => {
  return (
    <Fragment>
      <GoalsInput onChange={onChange} userInput={userInput} />
      <Button onSubmit={onSubmit} />
    </Fragment>
  );
};

AddGoal.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default AddGoal;
