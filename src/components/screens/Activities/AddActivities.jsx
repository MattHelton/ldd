import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import Button from '../../Elements/Button';
import Input from '../../Elements/Input';

const AddActivities = ({ onSubmit }) => (
  <Fragment>
    <Input />
    <Button onSubmit={onSubmit} />
  </Fragment>
);

AddActivities.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddActivities;
