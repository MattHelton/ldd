import React, { Component } from 'react';
import AddActivities from './AddActivities';
import ActivityGenerator from './ActivityGenerator';

class Activities extends Component {
  componentDidMount() {
    // Fetch activities
  }

  handleGenerate() {
    // Randomly display actvity from fetched activity array
    console.log('generated');
  }

  handleDelete() {
    // Deletes activities from database
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <AddActivities />
        </form>
        <ActivityGenerator onClick={this.handleGenerate} />
      </React.Fragment>
    // Add, view, edit, remove, and randomly generate from the list
    );
  }
}

export default Activities;
