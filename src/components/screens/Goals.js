import React, { Component } from 'react';
import GoalsList from './GoalsList';
import GoalsForm from './GoalsForm';
// import './Screens.css';

class Goals extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            goals: null,
            isHidden: true
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/goals")
    
        .then(res => res.json())
        .then(goals => 
            this.setState({goals: goals})
        )
    }

    handleInput(e) {
        this.setState({userInput: e.target.value})
    }

    handleClick() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    handleSubmit() {
        // const { title } = this.state
        alert('Plan added!')
        this.setState({userInput: ''})
        console.log('Submitted?')
    }
    render() {

        if (!this.state.goals) {
            console.log('if')
            return (
                <div>
                    <button onClick={this.handleClick} >
                            Add goal
                    </button>
                    {!this.state.isHidden && <GoalsForm />}
                </div>
                )
        } else {
            console.log('else')
            return (
                <div>
                    <button onClick={this.handleClick} >
                            New goal
                    </button>
                    {!this.state.isHidden && <GoalsForm onSubmit={this.handleSubmit}/>}
                    <GoalsList goals={this.state.goals}/>
                </div>
            )
        
    } 
}
}

export default Goals