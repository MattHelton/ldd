import React, { Component } from 'react';

class GoalsForm extends Component {
render() {
    return (
        <div>
            <div className='screen'>
                <div className='screen-content' >
                    <h1>
                       This is where you'll save your goals
                    </h1>
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
                        </div>
                        <div>
                            <button type='submit'>
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