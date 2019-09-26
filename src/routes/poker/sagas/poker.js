import { call, put } from 'redux-saga/effects';
import { getPointListDataApi } from './api';
import { IDBSet } from '../../../modules/indexed-db';
import { POINT_LIST_DATA } from '../../../constants';
import { pointListDataSet } from '../modules/point-list';

export function* fetchPointListData() {
    try {
        const response = yield call(getPointListDataApi);

        // save to indexedDb
        yield put(IDBSet({
            key: POINT_LIST_DATA,
            value: response.data
        }));

        // save to redux
        yield put(pointListDataSet({
            listData: response.data
        }));

        // yield put(spinnerHide());
    } catch (e) {
        // yield put(spinnerHide());
    }
}
