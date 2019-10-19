import { call, put } from 'redux-saga/effects';
import { get } from 'idb-keyval';
import { IDBSet } from '../modules/indexed-db';
import { PERSONAL_DEFAULT_SETTING, PERSONAL_SETTING, POINT_SEQUENCE_LIST } from '../constants';
import { pointListDataSet } from '../modules/point-list';

export function* setPersonalSetting({ payload }) {
    try {
        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: payload
        }));
        console.log('test');
    } catch (e) {
        console.log(e);
    }
}

export function* resetPersonalSetting() {
    try {
        const defaultSetting = yield {
            ...PERSONAL_DEFAULT_SETTING,
            sequenceType: 'planning-poker'
        };

        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: defaultSetting
        }));

        const sequenceList = yield call(get, POINT_SEQUENCE_LIST);

        yield put(pointListDataSet({
            listName: defaultSetting.sequenceType,
            listData: sequenceList[defaultSetting.sequenceType]
        }));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalSequenceType({ payload }) {
    try {
        const personal = yield call(get, PERSONAL_SETTING);

        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: {
                ...personal,
                sequenceType: payload
            }
        }));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalAutoHideCard() {
    try {
        const personal = yield call(get, PERSONAL_SETTING);

        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: {
                ...personal,
                autoHideCard: !personal.autoHideCard
            }
        }));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalKeepScreenOn() {
    try {
        const personal = yield call(get, PERSONAL_SETTING);

        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: {
                ...personal,
                keepScreenOn: !personal.keepScreenOn
            }
        }));
    } catch (e) {
        console.log(e);
    }
}

export function* changePersonalNumberColor({ payload }) {
    try {
        const personal = yield call(get, PERSONAL_SETTING);

        yield put(IDBSet({
            key: PERSONAL_SETTING,
            value: {
                ...personal,
                ...payload
            }
        }));
    } catch (e) {
        console.log(e);
    }
}
