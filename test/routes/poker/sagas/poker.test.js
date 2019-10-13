import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { getPointListDataApi } from '../../../../src/routes/poker/sagas/api';
import { fetchPointListData } from '../../../../src/routes/poker/sagas/poker';
import { IDBSet } from '../../../../src/modules/indexed-db';
import { POINT_SEQUENCE_LIST } from '../../../../src/constants';
import { pointListDataFetch, pointListDataSet } from '../../../../src/modules/point-list';
import { spinnerHide, spinnerShow } from '../../../../src/modules/spinner';

describe('test poker saga.', () => {
    it('fetches point list.', () => {
        const fakeUser = [{ point: 1 }, { point: 2 }];

        return expectSaga(fetchPointListData, getPointListDataApi)
            .provide([
                [call(getPointListDataApi), fakeUser]
            ])
            .put(spinnerShow())
            .put(IDBSet({
                key: POINT_SEQUENCE_LIST,
                value: fakeUser
            }))
            .put(pointListDataSet({
                listData: fakeUser
            }))
            .put(spinnerHide())
            .dispatch(pointListDataFetch())
            .run();
    });

    it('handles errors', () => {
        const error = new Error('error');

        return expectSaga(fetchPointListData, getPointListDataApi)
            .provide([
                [matchers.call.fn(getPointListDataApi), throwError(error)],
            ])
            .put(spinnerHide())
            .dispatch(pointListDataFetch())
            .run();
    });
});
