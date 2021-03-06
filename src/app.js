import ReactDOM from 'react-dom';
import './themes/init.css'
import './themes/app.css'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'
// import routes from './routes';
import React, { Component } from 'react';
import { App, Home, Comments } from './containers';

/**
 * <ul>
                <li><Link to="/">首页</Link></li> 
                <li><Link to="/comment">主题列表</Link></li>
            </ul>

            <hr />
 */
ReactDOM.render(
    <Router>
        <div>
            

            <Route exact path="/" component={Home} />
            <Route path="/comment" component={Comments} /> 
        </div>
    </Router>,

    document.getElementById('root'));

