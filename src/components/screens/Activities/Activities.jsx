import React, { Component } from 'react';
import AddActivities from './AddActivities'
import ActivityGenerator from './ActivityGenerator'

class Activities extends Component {
    render() {
        return (

            // Remove this message after user begins list
            <div className='screen'>
                <div className='screen-content'>
                    <AddActivities />
                    <ActivityGenerator />
                </div>
            </div>
        // Add, view, edit, remove, and randomly generate from the list
        )
    }
}

export default Activities