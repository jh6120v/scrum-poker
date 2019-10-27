import { history, store } from '../../store';
import { injectReducer } from '../../store/reducers';
import Poker from './containers/poker';
import pointSelectorReducer from './modules/point-selector';

// reducer
injectReducer(history, store, [
    { key: 'pointSelector', reducer: pointSelectorReducer }
]);

export default Poker;
