import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';
import { FUNC_CLOSE, FUNC_GO_BACK, FUNC_SETTING } from '../constants';

// Actions
const actionCreator = createActionCreator('@@HEADER');
const headerTitleDefault = actionCreator('TITLE_DEFAULT');
const headerTitleSet = actionCreator('TITLE_SET');
const prevLinkActGoBack = actionCreator('PREV_LINK_ACT_GO_BACK');
const prevLinkActClose = actionCreator('PREV_LINK_ACT_CLOSE');
const nextLinkActSetting = actionCreator('NEXT_LINK_ACT_SETTING');

export {
    headerTitleDefault, headerTitleSet, prevLinkActGoBack, prevLinkActClose, nextLinkActSetting
};


// Reducers
const initialState = {
    title: 'Scrum Poker',
    prev: null,
    next: FUNC_SETTING
};

const handlers = {
    [headerTitleDefault.type]: (state) => ({
        ...state,
        ...initialState
    }),
    [headerTitleSet.type]: (state, { payload }) => ({
        ...state,
        title: payload.title
    }),
    [prevLinkActGoBack.type]: (state) => ({
        ...state,
        prev: FUNC_GO_BACK,
        next: null
    }),
    [prevLinkActClose.type]: (state) => ({
        ...state,
        prev: FUNC_CLOSE,
        next: null
    }),
    [nextLinkActSetting.type]: (state) => ({
        ...state,
        prev: null,
        next: FUNC_SETTING
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
