import { call, put } from 'redux-saga/effects';
import { get } from 'idb-keyval';
import { getSequenceListDataApi } from './api';
import { IDBSet } from '../modules/indexed-db';
import { PERSONAL_SETTING, POINT_SEQUENCE_LIST } from '../constants';
import { sequenceListDataSet } from '../modules/sequence-list';
import { spinnerHide, spinnerShow } from '../modules/spinner';
import { pointListDataSet } from '../modules/point-list';
import { personalSettingSet } from '../modules/personal-setting';
import { personalDefaultSetting } from '../commons/utils';

export function* fetchSequenceListData() {
    try {
        yield put(spinnerShow());

        const response = yield call(getSequenceListDataApi);

        // save to indexedDb
        yield put(IDBSet({
            key: POINT_SEQUENCE_LIST,
            value: response
        }));

        // 存入 redux
        yield put(sequenceListDataSet({
            sequenceList: response
        }));

        // 取 DB 的個人設定檔
        const setting = yield call(get, PERSONAL_SETTING);

        // 若沒有設定檔，就用預設值(planning-poker)
        if (typeof setting !== 'undefined') {
            yield put(pointListDataSet({
                listName: setting.sequenceType,
                listData: response[setting.sequenceType]
            }));

            yield put(personalSettingSet(setting));
        } else {
            yield put(pointListDataSet({
                listName: 'planning-poker',
                listData: response['planning-poker']
            }));

            yield put(personalSettingSet({
                ...personalDefaultSetting,
                sequenceType: 'planning-poker'
            }));
        }

        yield put(spinnerHide());
    } catch (e) {
        yield put(spinnerHide());
    }
}
