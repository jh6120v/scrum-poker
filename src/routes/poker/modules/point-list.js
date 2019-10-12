import { createActionCreator } from '../../../commons/utils';
import { createReducer } from '../../../store/reducers';

// Actions
const actionCreator = createActionCreator('@@POKER/POINT_LIST');
const pointListDataSet = actionCreator('DATA_SET');

export { pointListDataSet };


// Reducers
const initialState = {
    listData: []
};

const handlers = {
    [pointListDataSet.type]: (state, { payload: { listData } }) => ({
        ...state,
        listData
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
