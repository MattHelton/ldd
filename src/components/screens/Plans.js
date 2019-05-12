import React, { Component } from 'react';
import './Screens.css';

class Plans extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            title: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        return (
        // Remove this element once a goal has been saved
            <div className='screen'>
                <div className='screen-content' >
                    <h1>
                        This is where you'll save your goals
                    </h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='col-25'>
                            <label for='plan'>Plan</label>
                        </div>
                        <div className='col-75'>
                            <input 
                                type='text' 
                                onChange={this.handleInput}
                                value={this.state.userInput}
                            />
                        </div>
                        <div>
                            <button type='submit'>
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        // User can create a goal with a priority
        // User can edit/delete these goals
        )
    }
}

export default Plans