import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@MODEL');
const modelShow = actionCreator('MODEL_SHOW');
const modelHide = actionCreator('MODEL_HIDE');

export { modelShow, modelHide };


// Reducers
const initialState = {
    isShow: false
};

const handlers = {
    [modelShow.type]: (state) => ({
        ...state,
        isShow: true
    }),
    [modelHide.type]: (state) => ({
        ...state,
        isShow: false
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
