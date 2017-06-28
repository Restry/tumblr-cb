import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, Comments } from './containers/App';

export default (
    <Route path="/" breadcrumbName="主页" component={App}>
        <IndexRoute component={Home} />

        <Route path="home" name="home" breadcrumbName="home">
            <IndexRoute component={Home} />
        </Route>
        <Route path="comments" name="comments" breadcrumbName="comments">
            <IndexRoute component={Comments} />
        </Route>

    </Route>
);
