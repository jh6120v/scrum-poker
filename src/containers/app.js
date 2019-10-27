import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import NoSleep from 'nosleep.js';
import rootSaga from '../sagas';
import { store, history, sagaMiddleware } from '../store';
import Routes from '../routes';
import Spinner from '../components/spinner';
import { injectReducer } from '../store/reducers';
import sequenceListReducer, { sequenceListDataFetch } from '../modules/sequence-list';
import personalSettingReducer from '../modules/personal-setting';
import spinnerReducer from '../modules/spinner';
import headerTitleReducer from '../modules/header';
import pointListReducer from '../modules/point-list';
import modelReducer from '../modules/model';
import { Container, Wrapper } from '../styles/layout-style';
import Header from '../components/header';

injectReducer(history, store, [
    { key: 'sequence', reducer: sequenceListReducer },
    { key: 'personal', reducer: personalSettingReducer },
    { key: 'pointList', reducer: pointListReducer },
    { key: 'spinner', reducer: spinnerReducer },
    { key: 'header', reducer: headerTitleReducer },
    { key: 'model', reducer: modelReducer }
]);

const App = () => {
    const dispatch = useDispatch();
    const { isShow } = useSelector((state) => state.spinner);
    const header = useSelector((state) => state.header);
    const personal = useSelector((state) => state.personal);

    useEffect(() => {
        dispatch(sequenceListDataFetch());

        // 為了讓 :active 在 ios 生效
        document.addEventListener('touchstart', () => {
        }, false);
    }, [dispatch]);

    useEffect(() => {
        const noSleep = new NoSleep();
        if (personal.keepScreenOn) {
            console.log('no sleep enabled');
            noSleep.enable();
        }

        return () => {
            console.log('no sleep disabled');
            noSleep.disable();
        };
    }, [personal.keepScreenOn]);

    return (
        <>
            <Spinner show={isShow} />
            <ConnectedRouter history={history}>
                <Wrapper>
                    <Header {...header} />
                    <Container>
                        <Routes />
                    </Container>
                </Wrapper>
            </ConnectedRouter>
        </>
    );
};

sagaMiddleware.run(rootSaga);

export default hot(App);
