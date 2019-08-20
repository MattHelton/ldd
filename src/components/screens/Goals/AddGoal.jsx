import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import Button from '../../Elements/Button';
import GoalsInput from './GoalsInput';

const AddGoal = ({ onChange, onSubmit, title }) => {
  return (
    <Fragment>
      <GoalsInput onChange={onChange} title={title} />
      <Button onSubmit={onSubmit} />
    </Fragment>
  );
};

AddGoal.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddGoal;
