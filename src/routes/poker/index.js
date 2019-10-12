import { history, store } from '../../store';
import { injectReducer } from '../../store/reducers';
import Poker from './containers/poker';
import pointListReducer from './modules/point-list';
import pointSelectorReducer from './modules/point-selector';

// reducer
injectReducer(history, store, [
    { key: 'pointList', reducer: pointListReducer },
    { key: 'pointSelector', reducer: pointSelectorReducer }
]);

export default Poker;
