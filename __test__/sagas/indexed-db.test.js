import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { set, del } from 'idb-keyval';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import { indexDBSet, indexDBDel } from '../../src/sagas/indexed-db';
import { IDBSet, IDBDelete } from '../../src/modules/indexed-db';

describe('test indexed-db saga.', () => {
    it('set data to indexDB', () => {
        const fakePayload = { payload: { key: 'key', value: 'value' } };
        return expectSaga(indexDBSet, fakePayload)
            .provide([
                [call(set, fakePayload.payload.key, fakePayload.payload.value)]
            ])
            .dispatch(IDBSet)
            .run();
    });

    it('handle set data to indexDB error.', () => {
        const error = new Error('error');
        const fakePayload = { payload: { key: 'key', value: 'value' } };

        return expectSaga(indexDBSet, fakePayload)
            .provide([
                [matchers.call.fn(set), throwError(error)]
            ])
            .dispatch(IDBSet)
            .run();
    });

    it('del data from indexDB.', () => {
        const fakePayload = {
            payload: 'AAA'
        };

        return expectSaga(indexDBDel, fakePayload)
            .provide([
                [call(del, fakePayload.payload)],
            ])
            .dispatch(IDBDelete)
            .run();
    });
});
