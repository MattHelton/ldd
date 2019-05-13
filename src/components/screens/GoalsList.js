import React, { Component } from 'react';

class GoalsList extends Component {
    
    render() {
        const goals = this.props.items
        console.log(this.props.items)
        console.log(goals)
        if (!goals) {
            console.log('No goals')
            return (
                <div>
                    No goals to display
                </div>
            )
        }else {
        const goalsArray = goals.data.map(goal => {
            return (
                <div key={goal.id}>
                    {goal.title}
                </div>
                )
        } )
        console.log({goalsArray})
        return (
            <div>
                {goalsArray}
            </div>
            
        )}
    }
}

export default GoalsList