import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Router, Route, Link, IndexRoute } from 'react-router';

import HelloWorldApp from './components/HelloWorldapp';
import Greeter from './components/GreeterPage';
import HelloWorld from './components/HelloWorld';
import Index from './components/FrontPage';
import Counter from './components/Counter';
import Counterizer from './components/Counterizer';


const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index} />
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
