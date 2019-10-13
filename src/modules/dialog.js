import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@POKER/DIALOG');
const dialogOpen = actionCreator('OPEN');
const dialogClose = actionCreator('CLOSE');

export { dialogOpen, dialogClose };


// Reducers
const initialState = {
    message: null,
    onCancel: () => { console.log('on cancel'); },
    onConfirm: () => { console.log('on confirm'); }
};

const handlers = {
    [dialogOpen.type]: (state, { payload }) => ({
        ...state,
        ...payload
    }),
    [dialogClose.type]: (state) => ({
        ...state,
        message: null
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
