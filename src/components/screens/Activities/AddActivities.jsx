import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import Button from '../../Elements/Button';
import Input from '../../Elements/Input';

const AddActivities = ({ onSubmit, onChange, name }) => (
  <Fragment>
    <Input onChange={onChange} name={name} />
    <Button onSubmit={onSubmit} />
  </Fragment>
);

AddActivities.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default AddActivities;
