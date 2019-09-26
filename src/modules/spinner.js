import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@SPINNER');
const spinnerShow = actionCreator('SPINNER_SHOW');
const spinnerHide = actionCreator('SPINNER_HIDE');

export { spinnerShow, spinnerHide };


// Reducers
const initialState = {
    isShow: false
};

const handlers = {
    [spinnerShow.type]: (state) => ({
        ...state,
        isShow: true
    }),
    [spinnerHide.type]: (state) => ({
        ...state,
        isShow: false
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
