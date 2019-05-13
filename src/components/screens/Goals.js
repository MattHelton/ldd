import React, { Component } from 'react';
import GoalsList from './GoalsList';
import GoalsForm from './GoalsForm';
import './Screens.css';

class Goals extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            title: '',
            items: null
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/goals")
    
        .then(res => res.json())
        .then(goals => 
            this.setState({items: goals})
        )
    }

    handleInput(e) {
        this.setState({userInput: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        // const { title } = this.state
        alert('Plan added!')
        this.setState({userInput: ''})
    }
    render() {

        if (!this.state.items) {
            return (
                <div>
                    <GoalsForm onChange={this.state.handleInput}/>
                </div>)
        } else {
            return (
                <div>
                    <GoalsForm onChange={this.state.handleInput}/>
                    <GoalsList items={this.state.items}/>
                </div>
            )
        
    } 
}
}

export default Goals