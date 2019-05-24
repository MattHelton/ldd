import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import GoalsInput from './GoalsInput';
import SubmitButton from '../../Elements/SubmitButton';

const AddGoal = ({ onChange, userInput }) => {
  return (
    <Fragment>
      <GoalsInput onChange={onChange} userInput={userInput} />
      <SubmitButton />
    </Fragment>
  );
};

AddGoal.propTypes = {
  onChange: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default AddGoal;
