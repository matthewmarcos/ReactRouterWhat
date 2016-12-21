import React, { Component } from 'react';

import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <div className="pad-navbar-side">
                        <a href="#" className="brand-logo">Room8</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Login</a></li>
                            <li><a href="badges.html">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
