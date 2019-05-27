import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import {IndexRoute} from 'react-router';
import App from './pages/App.js';

import Home from './pages/Home.js';

import About from './pages/About.js';

import NotFound from './pages/NotFound.js';


const Routes = () => (
    <BrowserRouter>
        <div>
        <Route path="/" component={App}>

            <Route path="/home" component={Home} />

            <Route path="/about" component={About} />

            <Route path="*" component={NotFound} />
        </Route>
        </div>
    </BrowserRouter>
);

export default Routes;