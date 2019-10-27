import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { identity, prop, propOr } from 'ramda';

const createRootReducer = (history, asyncReducers) => combineReducers({
    router: connectRouter(history),
    ...asyncReducers
});

export const injectReducer = (history, store, reducerList = []) => {
    // console.log(reducerList);
    const injectList = store.asyncReducers;
    for (const item of reducerList.values()) {
        injectList[item.key] = item.reducer;
    }

    store.replaceReducer(createRootReducer(history, injectList));
};

export const createReducer = (initialState, handlers) => (
    state = initialState,
    action
) => propOr(identity, prop('type', action), handlers)(state, action);

export default createRootReducer;
