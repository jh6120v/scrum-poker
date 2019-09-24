import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';
import { waitingRouteComponent } from '../commons/utils';

const Home = lazy(() => import('./home'));

const Routes = () => (
    <Switch>
        <Route path="/" exact component={waitingRouteComponent(Home)} />
    </Switch>
);

export default Routes;
