import { call } from 'redux-saga/effects';
import { del, set } from 'idb-keyval';

export function* indexDBSet({ payload }) {
    try {
        yield call(set, payload.key, payload.value);

        console.log('It worked!');
    } catch (e) {
        console.log('It failed!', e);
    }
}

export function* indexDBDel({ payload }) {
    for (const val of payload.values()) {
        yield call(del, val);
    }
}
