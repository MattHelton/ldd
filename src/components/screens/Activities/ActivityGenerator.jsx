import React from 'react';
import * as PropTypes from 'prop-types';

const ActivityGenerator = ({ onClick }) => (
  <React.Fragment>
    <button type="button" onClick={onClick}>Generate</button>
    {/* display generated activity */}
  </React.Fragment>
);
ActivityGenerator.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ActivityGenerator;
