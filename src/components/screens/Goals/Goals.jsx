import React, { Component, Fragment } from 'react';
// import GoalsList from '../GoalsList';
// import GoalsForm from './GoalsForm';
import Input from '../../Elements/Input';
import Select from '../../Elements/Select';
import Checkbox from '../../Elements/Checkbox';
import GoalsList from './GoalsList';
import SubmitButton from '../../Elements/SubmitButton';

class Goals extends Component {
        state = {
            userInput: '',
            goals: null,
            newGoal: '',
            isHidden: true,
            priorityOptions: ['low', 'medium', 'high']
        }

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/goals")
        .then(res => res.json())
        .then(goals => 
            this.setState({goals: goals})
        )
    }

    handleInput = (e) => {
        this.setState({userInput: e.target.value})
    }

    handleClick = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // const { goals } = this.state
        // this.setState({newGoal: goals})
        // console.log({goals})
        // fetch('http://localhost:3000/api/v1/goals', {
        //     method: 'POST',
        //     body: JSON.stringify({ goals })
        // })
        console.log('Submitted?')
        this.setState({userInput: ' '})
        alert('Plan added!')
    }
    render() {
        return (
            <Fragment>
                <form>
                    <Input onChange={this.handleInput}/>
                    <Select 
                        title={'Priority'}
                        options={this.state.priorityOptions}
                        placeholder={'Select Priority'}
                        // handleChange={this.handleInput}
                    />
                    <Checkbox />
                    <SubmitButton />
                </form>
                <GoalsList goals={this.state.goals}/>
            </Fragment>
        )
        // if (!this.state.goals) {
        //     console.log('if')
        //     return (
        //         <div>
        //             <button onClick={this.handleClick} >
        //                     Add goal
        //             </button>
        //             {!this.state.isHidden && <GoalsForm />}
        //         </div>
        //         )
        // } else {
        //     console.log('else')
        //     return (
        //         <div>
        //             <button onClick={this.handleClick} >
        //                     New goal
        //             </button>
        //             {!this.state.isHidden && <GoalsForm onSubmit={this.handleSubmit}/>}
        //             <GoalsList goals={this.state.goals}/>
        //             <form onSubmit={this.handleSubmit}>
        //                 <input type='text' onChange={this.handleInput}/>
        //             </form>
        //         </div>
            // )
        
    } 
}


export default Goals