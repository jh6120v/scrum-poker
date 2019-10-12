import { takeEvery, all } from 'redux-saga/effects';
import { indexDBDel, indexDBSet } from './indexed-db';
import { IDBDelete, IDBSet } from '../modules/indexed-db';
import { fetchSequenceListData } from './sequence-list';
import { sequenceListDataFetch } from '../modules/sequence-list';

function* watchIndexDBSet() {
    yield takeEvery(IDBSet.type, indexDBSet);
}

function* watchIndexDBDel() {
    yield takeEvery(IDBDelete.type, indexDBDel);
}

function* watchFetchSequenceListData() {
    yield takeEvery(sequenceListDataFetch.type, fetchSequenceListData);
}

export default function* rootSaga() {
    yield all([
        watchIndexDBSet(),
        watchIndexDBDel(),
        watchFetchSequenceListData()
    ]);
}
