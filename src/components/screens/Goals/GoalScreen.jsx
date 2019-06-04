/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import GoalsList from './GoalsList';
import AddGoal from './AddGoal';

class GoalScreen extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      goals: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/goals')
      .then(res => res.json())
      .then(goals => {
        this.setState({ goals: goals.data });
      });
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userInput } = this.state;
    fetch('http://localhost:3000/api/v1/goals', {
      method: 'POST',
      body: JSON.stringify({ userInput }),
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ userInput: '' });
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    const { goals } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <AddGoal
            onChange={this.handleChange}
            userInput={this.userInput}
            onSubmit={this.handleSubmit}
          />
        </form>
        <GoalsList goals={goals} />
      </Fragment>
    );
  }
}

export default GoalScreen;
