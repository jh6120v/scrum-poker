import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';
import { PERSONAL_DEFAULT_SETTING } from '../constants';

// Actions
const actionCreator = createActionCreator('@@PERSONAL_SETTING');
const personalSettingSet = actionCreator('SETTING_SET');
const personalSettingReset = actionCreator('SETTING_RESET');
const personalSequenceTypeChange = actionCreator('SEQUENCE_TYPE_CHANGE');
const personalAutoHideCardChange = actionCreator('AUTO_HIDE_CARD_CHANGE');
const personalKeepScreenOnChange = actionCreator('KEEP_SCREEN_ON_CHANGE');
const personalNumberColorChange = actionCreator('NUMBER_COLOR_CHANGE');

export {
    personalSettingSet, personalSettingReset,
    personalSequenceTypeChange, personalAutoHideCardChange, personalKeepScreenOnChange,
    personalNumberColorChange
};


// Reducers
const initialState = PERSONAL_DEFAULT_SETTING;

const handlers = {
    [personalSettingSet.type]: (state, { payload }) => ({
        ...state,
        ...payload
    }),
    [personalSettingReset.type]: (state) => ({
        ...state,
        ...PERSONAL_DEFAULT_SETTING,
        sequenceType: 'planning-poker'
    }),
    [personalSequenceTypeChange.type]: (state, { payload }) => ({
        ...state,
        sequenceType: payload
    }),
    [personalAutoHideCardChange.type]: (state) => ({
        ...state,
        autoHideCard: !state.autoHideCard
    }),
    [personalKeepScreenOnChange.type]: (state) => ({
        ...state,
        keepScreenOn: !state.keepScreenOn
    }),
    [personalNumberColorChange.type]: (state, { payload: { type, change } }) => ({
        ...state,
        theme: {
            ...state.theme,
            [type]: {
                ...state.theme[type],
                ...change
            }
        }
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
