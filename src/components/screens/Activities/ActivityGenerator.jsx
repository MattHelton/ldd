import React from 'react';

const ActivityGenerator = (props) => {
    return ( 
        <React.Fragment>
            <button onClick={props.onClick}>Generate</button>
            {/* display generated activity */}
        </React.Fragment>
     );
}
 
export default ActivityGenerator;