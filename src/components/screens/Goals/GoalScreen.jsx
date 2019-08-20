/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import GoalsList from './GoalsList';
import AddGoal from './AddGoal';

class GoalScreen extends Component {
  constructor() {
    super();
    this.state = {
      userInput: { title: '' },
      goals: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/goals')
      .then(res => res.json())
      .then(goals => {
        this.setState({ goals });
      });
  }

  handleChange(e) {
    this.setState({ userInput: { title: e.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userInput } = this.state;

    return fetch('http://localhost:3000/api/v1/goals', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(userInput),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const goals = this.state.goals.slice();
        goals.push(data);
        this.setState({ userInput: { title: '' }, goals });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { goals } = this.state;
    const { title } = this.state.userInput;
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <AddGoal
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            userInput={this.userInput}
            title={title}
          />
        </form>
        <GoalsList goals={goals} />
      </Fragment>
    );
  }
}

export default GoalScreen;
