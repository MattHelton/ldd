import React, { Component, Fragment } from 'react';
import GoalsForm from './GoalsForm';
import GoalsList from './GoalsList';
import CheckBox from '../../Elements/Checkbox';

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
  }

  render() {
    const { goals } = this.state;
    return (
      <Fragment>
        <GoalsForm
          onChange={this.handleChange}
          userInput={this.userInput}
          onSubmit={this.handleSubmit}
        />
        <GoalsList goals={goals} />
      </Fragment>
    );
  }
}

export default GoalScreen;
