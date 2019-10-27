import { createActionCreator } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@POINT_LIST');
const pointListDataSet = actionCreator('LIST_DATA_SET');

export { pointListDataSet };


// Reducers
const initialState = {
    listName: '',
    listData: []
};

const handlers = {
    [pointListDataSet.type]: (state, { payload: { listName, listData } }) => ({
        ...state,
        listName,
        listData
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
