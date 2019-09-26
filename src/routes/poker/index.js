import rootSaga from './sagas';
import { history, store, sagaMiddleware } from '../../store';
import { injectReducer } from '../../store/reducers';
import Poker from './containers/poker';
import pointListReducer from './modules/point-list';

// reducer
injectReducer(history, store, [
    { key: 'pointList', reducer: pointListReducer }
]);

sagaMiddleware.run(rootSaga);

export default Poker;
