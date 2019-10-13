import { createActionCreator, personalDefaultSetting } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@POKER/PERSONAL_SETTING');
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
const initialState = personalDefaultSetting;

const handlers = {
    [personalSettingSet.type]: (state, { payload }) => ({
        ...state,
        ...payload
    }),
    [personalSettingReset.type]: (state) => ({
        ...state,
        ...personalDefaultSetting,
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
    [personalNumberColorChange.type]: (state, { payload }) => ({
        ...state,
        ...payload
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
