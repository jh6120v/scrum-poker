import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import rootSaga from '../sagas';
import { history, sagaMiddleware } from '../store';
import Routes from '../routes';

const App = () => (
    <ConnectedRouter history={history}>
        <Routes />
    </ConnectedRouter>
);

sagaMiddleware.run(rootSaga);

export default hot(App);
