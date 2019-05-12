import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import Goals from './Goals'
import Okay from './Okay'
import Home from './Home'
import Pictures from './Pictures'
import './Layout.css';

class ScreensRoot extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/okay' component={Okay} />
                    <Route path='/goals' component={Goals} />
                    <Route path='/pictures' component={Pictures} />
                    <Route render={() => <h1 id='no-page'>Page not found</h1>} />
                </Switch>
            </Router>
        )
    }
}

export default ScreensRoot