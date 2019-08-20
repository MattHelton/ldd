import React, { Component } from 'react';
import AddActivities from './AddActivities';
import ActivityGenerator from './ActivityGenerator';
import DisplayActivity from './displayActivity';

class Activities extends Component {
  constructor() {
    super();
    this.state = {
      userInput: { name: '' },
      activities: [],
      chosenActivity: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/activities')
      .then(res => res.json())
      .then(activity => {
        this.setState({ activities: activity });
        console.log(this.activities);
      });
  }

  handleChange(e) {
    this.setState({ userInput: { name: e.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userInput } = this.state;

    return fetch('http://localhost:3000/api/v1/activities', {
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
        const activities = this.state.activities.slice();
        activities.push(data);
        this.setState({ userInput: { name: '' }, activities });
      })
      .catch(err => console.log(err));
  }

  handleDelete(e) {
    e.preventDefault();
  }

  roll() {
    const { activities } = this.state;
    return Math.floor(Math.random() * activities.length);
  }

  handleGenerate() {
    const { activities } = this.state;
    // Randomly display actvity from fetched activity array
    const number = this.roll();
    this.setState({ chosenActivity: activities[number].name });
  }

  render() {
    const { activities, chosenActivity } = this.state;
    const { name } = this.state.userInput;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <AddActivities
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            userInput={this.userInput}
            name={name}
          />
        </form>
        <ActivityGenerator
          onClick={this.handleGenerate}
          activities={activities}
        />
        <DisplayActivity chosenActivity={chosenActivity} />
      </React.Fragment>
      // Add, view, edit, remove, and randomly generate from the list
    );
  }
}

export default Activities;
