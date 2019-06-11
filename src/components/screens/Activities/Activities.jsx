import React, { Component } from 'react';
import AddActivities from './AddActivities';
import ActivityGenerator from './ActivityGenerator';
import DisplayActivity from './displayActivity';

class Activities extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      activities: [],
      chosenActivity: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/activities')
      .then(res => res.json())
      .then(activity => {
        this.setState({ activities: activity });
        console.log(this.state.activities);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('submitted');
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

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  render() {
    const { activities, chosenActivity } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <AddActivities onSubmit={this.onSubmit} />
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
