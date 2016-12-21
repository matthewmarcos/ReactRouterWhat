import React, { Component } from 'react';
import { Link } from 'react-router';

import './NoMatch.css';

export default class NoMatch extends Component {
    render() {
        return(
            <div className="no-match container center">
                <h1>Di ko nagets</h1>
                <Link to={'/'} className="waves-effect waves-light btn">Take me Home</Link>
            </div>
        );
    }
}
