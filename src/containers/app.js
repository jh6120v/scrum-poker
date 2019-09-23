import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';
import Routes from '../routes';

const App = () => (
    <ConnectedRouter history={history}>
        <Routes />
    </ConnectedRouter>
);

export default hot(App);
