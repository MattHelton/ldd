import React, { Component } from 'react';

class GoalsForm extends Component {
render() {
    return (
        <div>
            <div className='screen'>
                <div className='screen-content' >
                    <form onSubmit={this.handleSubmit}>
                        <div className='col-25'>
                           <label htmlFor='goal'>New Goal</label>
                        </div>
                        <div className='col-75'>
                            <input 
                               type='text' 
                               onChange={this.handleInput}
                               value={this.props.userInput}
                            />
                            <select>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div>
                            <button type='submit' onSubmit={this.handleSubmit}>
                               Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
}

export default GoalsForm