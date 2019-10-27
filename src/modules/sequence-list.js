import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@SEQUENCE_LIST');
const sequenceListDataFetch = actionCreator('LIST_DATA_FETCH');
const sequenceListDataSet = actionCreator('LIST_DATA_SET');

export { sequenceListDataFetch, sequenceListDataSet };


// Reducers
const initialState = {
    sequenceList: {},
    cache: false
};

const handlers = {
    [sequenceListDataSet.type]: (state, { payload: { sequenceList } }) => ({
        ...state,
        sequenceList,
        cache: true
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
