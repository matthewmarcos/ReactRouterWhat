import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {


    handleClick() {
        axios.get('/api')
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
    }

    render() {
        return (
            <div className="App">
                <h1>Yeah!</h1>
                <a className="waves-effect waves-light btn" onClick={this.handleClick.bind(this)}>button</a>
            </div>
        );
    }
}

export default App;
