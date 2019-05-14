import React, { Component } from 'react';

class GoalsList extends Component {
    
    render() {
        const goals = this.props.goals
        console.log(this.props.goals)
        console.log(goals)
        if (!goals) {
            console.log('No goals')
            return (
                <div>
                    No goals to display
                </div>
            )
        }else {
        const goalsArray = goals.data.map(goal => 
                <h1 key={goal.id} className='goals'>
                    This is the goal title: {goal.title}
                </h1>
         )
        console.log({goalsArray})
        return (
            <div className='goals-list'>
                This is a goal: {goalsArray}
            </div>
            
        )}
    }
}

export default GoalsList