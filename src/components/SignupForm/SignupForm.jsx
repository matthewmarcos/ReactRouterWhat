import React, { Component } from 'react';

import './SignupForm.css';

export default class SignupForm extends Component {

    handleSignup(e) {
        e.preventDefault();

        const username = e.target.elements['username'].value;
        const password = e.target.elements['password'].value;
        const password2 = e.target.elements['password_retype'].value;

        if(password !== password2) {
            return console.log('Passwords do not match!');
        }

        console.log('Username: ', username);
        console.log('Password:', password);
    }

    render() {
        return(
            <div className="container">
                <h2 className="header">Create Profile</h2>
                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                        <form className="login-form" onSubmit={this.handleSignup.bind(this)}>
                            <div className="row">
                                <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="username" type="text" className="validate"/>
                                <label htmlFor="username">Username</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                <i className="material-icons prefix">lock</i>
                                <input id="password" type="password" className="validate"/>
                                <label htmlFor="password">Password</label>
                                </div>

                                <div className="input-field col s6">
                                <input id="password_retype" type="password" className="validate"/>
                                <label htmlFor="password">Retype Password</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col right">
                                    <button className="btn waves-effect waves-light" type="submit" name="action">Find Roommates!
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
