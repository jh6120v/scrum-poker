import { call, put } from 'redux-saga/effects';
import { getPointListDataApi } from './api';
import { IDBSet } from '../../../modules/indexed-db';
import { POINT_LIST_DATA } from '../../../constants';
import { pointListDataSet } from '../modules/point-list';
import { spinnerHide, spinnerShow } from '../../../modules/spinner';

export function* fetchPointListData() {
    try {
        yield put(spinnerShow());

        const response = yield call(getPointListDataApi);

        // console.log(response);

        // save to indexedDb
        yield put(IDBSet({
            key: POINT_LIST_DATA,
            value: response
        }));

        // save to redux
        yield put(pointListDataSet({
            listData: response
        }));

        yield put(spinnerHide());
    } catch (e) {
        yield put(spinnerHide());
    }
}
