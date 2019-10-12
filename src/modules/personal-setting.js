import { createActionCreator, personalDefaultSetting } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@POKER/PERSONAL_SETTING');
const personalSettingSet = actionCreator('SETTING_SET');

export { personalSettingSet };


// Reducers
const initialState = personalDefaultSetting;

const handlers = {
    [personalSettingSet.type]: (state, { payload }) => ({
        ...state,
        payload
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
