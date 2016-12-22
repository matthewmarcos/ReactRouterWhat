import React, { Component } from 'react';
import { Link } from 'react-router';

import './NoMatch.css';
import Sadface from './images/sadface.png';

export default class NoMatch extends Component {

    render() {
        return(
            <div className="center no-match container">
                <h1>Oops!</h1>
                <img id="sadface-image" src={Sadface} alt="Sadface"/>
                <h5>We could not find the page you were looking for.</h5>
                <Link to={'/'} className="waves-effect waves-light btn">Take me Home</Link>
            </div>
        );
    }
}
