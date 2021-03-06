import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Activities from './screens/Activities/Activities';
import GoalScreen from './screens/Goals/GoalScreen';
import Pictures from './screens/Pictures';
// import './Layout.css';

class ScreensRoot extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/activities" component={Activities} />
          <Route path="/goals" component={GoalScreen} />
          <Route path="/pictures" component={Pictures} />
          <Route render={() => <h1 id="no-page">Page not found</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default ScreensRoot;
