import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../Navbar/Navbar';
import LoginForm from '../LoginForm/LoginForm';

import './App.css';

export default class App extends Component {

    handleClick() {
        axios.get('/api/asdasd')
          .then(function (response) {
              const { data } = response;
              console.log(data);
          })
          .catch(function (error) {
              console.log(error);
          });
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <LoginForm />
                </div>
            </div>
        );
    }
}
                  // <h1>Yeah!</h1>
                  // <a className="waves-effect waves-light btn" onClick={this.handleClick.bind(this)}>button</a>
