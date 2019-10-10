import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Link } from 'react-router-dom';
import IosSettings from 'react-ionicons/lib/IosSettings';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import MdClose from 'react-ionicons/lib/MdClose';
import rootSaga from '../sagas';
import { store, history, sagaMiddleware } from '../store';
import Routes from '../routes';
import Spinner from '../components/spinner';
import { injectReducer } from '../store/reducers';
import spinnerReducer from '../modules/spinner';
import headerTitleReducer, { headerTitleDefault, nextLinkActSetting, prevLinkActGoBack } from '../modules/header';
import {
    Container, Footer,
    Header, NextLink, PrevLink, Title, Wrapper
} from '../styles/layout-style';
import { CloseButton, Setting } from '../routes/poker/styles';
import { FUNC_CLOSE, FUNC_GO_BACK, FUNC_SETTING } from '../constants';

injectReducer(history, store, [
    { key: 'spinner', reducer: spinnerReducer },
    { key: 'header', reducer: headerTitleReducer }
]);

const App = () => {
    const { isShow } = useSelector((state) => state.spinner);
    const { title, prev, next } = useSelector((state) => state.header);

    const renderPrev = (prevState) => {
        switch (prevState) {
            case FUNC_GO_BACK:
                return (
                    <a onClick={() => history.goBack()}>
                        <IosArrowBack fontSize="25px" color="#fff" />
                    </a>
                );
            case FUNC_CLOSE:
                return (
                    <CloseButton>
                        <MdClose fontSize="25px" color="#fff" />
                    </CloseButton>
                );
            default:
                return null;
        }
    };

    const renderNext = (nextState) => {
        switch (nextState) {
            case FUNC_SETTING:
                return (
                    <Setting>
                        <Link to="/setting">
                            <IosSettings fontSize="25px" color="#fff" />
                        </Link>
                    </Setting>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Spinner show={isShow} />
            <ConnectedRouter history={history}>
                <Wrapper>
                    <Header data-testid="display_header">
                        <PrevLink>{renderPrev(prev)}</PrevLink>
                        <Title>{title}</Title>
                        <NextLink>{renderNext(next)}</NextLink>
                    </Header>
                    <Container>
                        <Routes />
                    </Container>
                    <Footer>For Testing Purposes Only</Footer>
                </Wrapper>
            </ConnectedRouter>
        </>
    );
};

sagaMiddleware.run(rootSaga);

export default hot(App);
