import { createActionCreator } from '../commons/utils';

// Actions
const actionCreator = createActionCreator('@@INDEX_DB');
const IDBSet = actionCreator('INDEXED_DB_SET');
const IDBGet = actionCreator('INDEXED_DB_GET');
const IDBDelete = actionCreator('INDEXED_DB_DELETE');

export {
    IDBSet,
    IDBGet,
    IDBDelete
};

// 不需要 reducers (沒有真正把資料存進 state)
