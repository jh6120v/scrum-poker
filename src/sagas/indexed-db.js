import { call } from 'redux-saga/effects';
import { del, set } from 'idb-keyval';

export function* indexDBSet({ payload }) {
    try {
        yield call(set, payload.key, payload.value);

        console.log('save to db success.');
    } catch (e) {
        console.log('save to db failed.', e);
    }
}

export function* indexDBDel({ payload }) {
    for (const val of payload.values()) {
        yield call(del, val);
    }
}
