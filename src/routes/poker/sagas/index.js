import { takeEvery, all } from 'redux-saga/effects';
import { pointListDataFetch } from '../modules/point-list';
import { fetchPointListData } from './poker';

function* watchPointListDataFetch() {
    yield takeEvery(pointListDataFetch.type, fetchPointListData);
}

export default function* rootSaga() {
    yield all([
        watchPointListDataFetch()
    ]);
}
