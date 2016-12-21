import React, { Component } from 'react';

import './LoginForm.css';

export default class LoginForm extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };
    }

    handleLogin(e) {
        e.preventDefault();

    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleLogin.bind(this)}>
                <div className="row">
                    <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="username" type="text" className="validate"/>
                    <label htmlFor="username">Username</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <i className="material-icons prefix">lock</i>
                    <input id="password" type="password" className="validate"/>
                    <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col offset-s10">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
