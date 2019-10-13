import { takeEvery, all } from 'redux-saga/effects';
import { indexDBDel, indexDBSet } from './indexed-db';
import { IDBDelete, IDBSet } from '../modules/indexed-db';
import { fetchSequenceListData } from './sequence-list';
import { sequenceListDataFetch } from '../modules/sequence-list';
import {
    personalSettingReset,
    personalSettingSet,
    personalSequenceTypeChange,
    personalAutoHideCardChange, personalKeepScreenOnChange, personalNumberColorChange
} from '../modules/personal-setting';
import {
    changePersonalAutoHideCard, changePersonalKeepScreenOn, changePersonalNumberColor,
    changePersonalSequenceType,
    resetPersonalSetting,
    setPersonalSetting
} from './personal-setting';

function* watchIndexDBSet() {
    yield takeEvery(IDBSet.type, indexDBSet);
}

function* watchIndexDBDel() {
    yield takeEvery(IDBDelete.type, indexDBDel);
}

function* watchFetchSequenceListData() {
    yield takeEvery(sequenceListDataFetch.type, fetchSequenceListData);
}

function* watchPersonalSettingSet() {
    yield takeEvery(personalSettingSet.type, setPersonalSetting);
}

function* watchPersonalSettingReset() {
    yield takeEvery(personalSettingReset.type, resetPersonalSetting);
}

function* watchPersonalSequenceTypeChange() {
    yield takeEvery(personalSequenceTypeChange.type, changePersonalSequenceType);
}

function* watchPersonalAutoHideCardChange() {
    yield takeEvery(personalAutoHideCardChange.type, changePersonalAutoHideCard);
}

function* watchPersonalKeepScreenOnChange() {
    yield takeEvery(personalKeepScreenOnChange.type, changePersonalKeepScreenOn);
}

function* watchPersonalNumberColorChange() {
    yield takeEvery(personalNumberColorChange.type, changePersonalNumberColor);
}

export default function* rootSaga() {
    yield all([
        watchIndexDBSet(),
        watchIndexDBDel(),
        watchFetchSequenceListData(),
        watchPersonalSettingSet(),
        watchPersonalSettingReset(),
        watchPersonalSequenceTypeChange(),
        watchPersonalAutoHideCardChange(),
        watchPersonalKeepScreenOnChange(),
        watchPersonalNumberColorChange()
    ]);
}
