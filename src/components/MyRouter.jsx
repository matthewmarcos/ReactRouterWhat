import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App/App';
import Home from './Home/Home';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';

export default class MyRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="login" component={LoginForm}/>
                    <Route path="signup" component={SignupForm}/>
                </Route>
            </Router>
        );
    }
}
