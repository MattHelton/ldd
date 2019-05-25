import React, { Component } from 'react';
import AddActivities from './AddActivities';
import ActivityGenerator from './ActivityGenerator';

class Activities extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Fetch activities
  }

  handleGenerate() {
    // Randomly display actvity from fetched activity array
    console.log('generated');
  }

  handleDelete(e) {
    e.preventDefault();
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <AddActivities onSubmit={this.onSubmit} />
        </form>
        <ActivityGenerator onClick={this.handleGenerate} />
      </React.Fragment>
      // Add, view, edit, remove, and randomly generate from the list
    );
  }
}

export default Activities;
