import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

const DisplayActivity = ({ chosenActivity }) => (
  <Fragment>
    <h1 id="chosenActivity" className="hidden">
      {chosenActivity}
    </h1>
  </Fragment>
);
DisplayActivity.propTypes = {
  idea: PropTypes.string.isRequired,
};
export default DisplayActivity;
