import React, { Component } from 'react';
import AddActivities from './AddActivities';
import ActivityGenerator from './ActivityGenerator';

class Activities extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      activities: [],
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

  handleDelete(e) {
    e.preventDefault();
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  roll() {
    const { activities } = this.state;
    return Math.floor(Math.random() * activities.length);
  }

  handleGenerate() {
    const { activities } = this.state;
    // Randomly display actvity from fetched activity array
    const number = this.roll();
    console.log('generated', activities[number], number);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  render() {
    const { activities } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <AddActivities onSubmit={this.onSubmit} />
        </form>
        <ActivityGenerator
          onClick={this.handleGenerate}
          activities={activities}
        />
      </React.Fragment>
      // Add, view, edit, remove, and randomly generate from the list
    );
  }
}

export default Activities;
