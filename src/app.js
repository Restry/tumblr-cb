import ReactDOM from 'react-dom';
import './themes/init.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
// import routes from './routes';
import React, { Component } from 'react';
import { App, Home, Comments } from './containers';


ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li> 
                <li><Link to="/comment">主题列表</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/comment" component={Comments} /> 
        </div>
    </Router>,

    document.getElementById('root'));

