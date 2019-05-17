import React, { Component } from 'react';

class Input extends Component {
render() {
    return (
        <input 
           type='text' 
           onChange={this.handleInput}
           value={this.props.userInput}
        />
    )
}
}

export default Input