import { expectSaga } from 'redux-saga-test-plan';
import { takeEvery } from 'redux-saga/effects';
import rootSage from '../../src/sagas';
import { IDBDelete, IDBSet } from '../../src/modules/indexed-db';
import { indexDBDel, indexDBSet } from '../../src/sagas/indexed-db';
import { sequenceListDataFetch } from '../../src/modules/sequence-list';
import { fetchSequenceListData } from '../../src/sagas/sequence-list';
import {
    personalAutoHideCardChange, personalKeepScreenOnChange, personalNumberColorChange,
    personalSequenceTypeChange,
    personalSettingReset,
    personalSettingSet
} from '../../src/modules/personal-setting';
import {
    changePersonalAutoHideCard, changePersonalKeepScreenOn, changePersonalNumberColor,
    changePersonalSequenceType,
    resetPersonalSetting,
    setPersonalSetting
} from '../../src/sagas/personal-setting';

describe('test entry of sagas.', () => {
    it('root saga must resolve all.', () => expectSaga(rootSage)
        .provide([
            [takeEvery(IDBSet.type, indexDBSet)],
            [takeEvery(IDBDelete.type, indexDBDel)],
            [takeEvery(sequenceListDataFetch.type, fetchSequenceListData)],
            [takeEvery(personalSettingSet.type, setPersonalSetting)],
            [takeEvery(personalSettingReset.type, resetPersonalSetting)],
            [takeEvery(personalSequenceTypeChange.type, changePersonalSequenceType)],
            [takeEvery(personalAutoHideCardChange.type, changePersonalAutoHideCard)],
            [takeEvery(personalKeepScreenOnChange.type, changePersonalKeepScreenOn)],
            [takeEvery(personalNumberColorChange.type, changePersonalNumberColor)]
        ])
        .run());
});