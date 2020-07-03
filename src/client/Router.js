import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound } from '~c/pages/index';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route component={NotFound}/>
    </Switch>
);

export default Router;