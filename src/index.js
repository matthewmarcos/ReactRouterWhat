import React from 'react';
import ReactDOM from 'react-dom';

import MyRouter from './components/MyRouter';
import 'materialize-css/bin/materialize.js';
import 'materialize-css/bin/materialize.css';

import './index.css';

ReactDOM.render(
    <MyRouter />,
    document.getElementById('root')
);
