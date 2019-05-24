import React, { Component } from 'react';
import GoalsForm from './GoalsForm';

class Goals extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <GoalsForm
        onChange={this.handleChange}
        userInput={this.userInput}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default Goals;
