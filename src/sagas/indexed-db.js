import { call } from 'redux-saga/effects';
import { del, set } from 'idb-keyval';

export function* indexDBSet({ payload }) {
    try {
        yield call(set, payload.key, payload.value);

        console.log('save to db success.');
    } catch (e) {
        console.log('save to db failed.');
    }
}

export function* indexDBDel({ payload }) {
    yield call(del, payload);
}
