import { hot } from 'react-hot-loader/root';
import React from 'react';
import { useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import rootSaga from '../sagas';
import { store, history, sagaMiddleware } from '../store';
import Routes from '../routes';
import Spinner from '../components/spinner';
import { injectReducer } from '../store/reducers';
import spinnerReducer from '../modules/spinner';

injectReducer(history, store, [
    { key: 'spinner', reducer: spinnerReducer }
]);

const App = () => {
    const spinner = useSelector((state) => state.spinner);

    return (
        <>
            <Spinner show={spinner.isShow} />
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </>
    );
};

sagaMiddleware.run(rootSaga);

export default hot(App);
