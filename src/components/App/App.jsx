import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../Navbar/Navbar';

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
                {this.props.children || "Error Loading Child Component"}
            </div>
        );
    }
}
