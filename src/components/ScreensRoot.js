import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home'
import Actions from './screens/Actions'
import Plans from './screens/Plans'
import Images from './screens/Images'
import './Layout.css';

class ScreensRoot extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/actions' component={Actions} />
                    <Route path='/plans' component={Plans} />
                    <Route path='/images' component={Images} />
                    <Route render={() => <h1 id='no-page'>Page not found</h1>} />
                </Switch>
            </Router>
        )
    }
}

export default ScreensRoot