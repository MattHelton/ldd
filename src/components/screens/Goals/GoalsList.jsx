import React, { Component, Fragment } from 'react';
import Checkbox from '../../Elements/Checkbox'

class GoalsList extends Component {
    
    render() {
        const goals = this.props.goals
        // console.log(this.props.goals)
        // console.log(goals)
        if (!goals) {
            console.log('No goals')
            return (
                <div>
                    No goals to display
                </div>
            )
        }else {
        const goalsArray = goals.data.map(goal =>
            <Fragment key={goal.id}> 
                    <h1 className='goals'>
                        {goal.title}
                    </h1>
                    <Checkbox />
                </Fragment>
         )
        return (
            <div className='goals-list'>
                {goalsArray}
            </div>
            
        )}
    }
}

export default GoalsList