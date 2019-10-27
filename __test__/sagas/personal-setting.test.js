import { expectSaga } from 'redux-saga-test-plan';
import { call, put } from 'redux-saga/effects';
import { get } from 'idb-keyval';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import {
    changePersonalAutoHideCard, changePersonalKeepScreenOn, changePersonalNumberColor,
    changePersonalSequenceType,
    resetPersonalSetting,
    setPersonalSetting
} from '../../src/sagas/personal-setting';
import { IDBSet } from '../../src/modules/indexed-db';
import { PERSONAL_DEFAULT_SETTING, PERSONAL_SETTING, POINT_SEQUENCE_LIST } from '../../src/constants';
import {
    personalAutoHideCardChange, personalKeepScreenOnChange, personalNumberColorChange,
    personalSequenceTypeChange,
    personalSettingReset,
    personalSettingSet
} from '../../src/modules/personal-setting';
import { pointListDataSet } from '../../src/modules/point-list';

describe('test personal-setting saga.', () => {
    it('success to set personal setting to indexDB.', () => {
        const fakePayload = { payload: { test: 'test' } };

        return expectSaga(setPersonalSetting, fakePayload)
            .put(IDBSet({
                key: PERSONAL_SETTING,
                value: fakePayload.payload
            }))
            .dispatch(personalSettingSet)
            .run();
    });

    it('fail to set personal setting to indexDB.', () => {
        const fakePayload = { payload: { test: 'test' } };
        const error = new Error('error');

        return expectSaga(setPersonalSetting, fakePayload)
            .provide([
                [put(IDBSet({
                    key: PERSONAL_SETTING,
                    value: fakePayload.payload
                })), throwError(error)]
            ])
            .dispatch(personalSettingSet)
            .run();
    });

    it('success to reset personal setting.', () => {
        const fakeSequenceList = {
            'planning-poker': [
                {
                    point: '0'
                },
                {
                    point: '1/2'
                }
            ]
        };

        const fakeDefaultSetting = {
            ...PERSONAL_DEFAULT_SETTING,
            sequenceType: 'planning-poker'
        };

        return expectSaga(resetPersonalSetting)
            .provide([
                [call(get, POINT_SEQUENCE_LIST), fakeSequenceList]
            ])
            .put(IDBSet({
                key: PERSONAL_SETTING,
                value: fakeDefaultSetting
            }))
            .put(pointListDataSet({
                listName: fakeDefaultSetting.sequenceType,
                listData: fakeSequenceList[fakeDefaultSetting.sequenceType]
            }))
            .dispatch(personalSettingReset)
            .run();
    });

    it('fail to reset personal setting.', () => {
        const fakeDefaultSetting = {
            ...PERSONAL_DEFAULT_SETTING,
            sequenceType: 'planning-poker'
        };
        const error = new Error('error');

        return expectSaga(resetPersonalSetting)
            .provide([
                [matchers.call.fn(get), throwError(error)]
            ])
            .put(IDBSet({
                key: PERSONAL_SETTING,
                value: fakeDefaultSetting
            }))
            .dispatch(personalSettingReset)
            .run();
    });

    it('success to change personal sequence type.', () => {
        const fakePayload = { payload: 'planning-poker' };
        const fakePersonal = {};

        return expectSaga(changePersonalSequenceType, fakePayload)
            .provide([
                [call(get, PERSONAL_SETTING), fakePersonal]
            ])
            .put(IDBSet({
                key: PERSONAL_SETTING,
                value: {
                    ...fakePersonal,
                    sequenceType: fakePayload.payload
                }
            }))
            .dispatch(personalSequenceTypeChange)
            .run();
    });

    it('fail to change personal sequence type.', () => {
        const fakePayload = { payload: 'planning-poker' };
        const error = new Error('error');

        return expectSaga(changePersonalSequenceType, fakePayload)
            .provide([
                [matchers.call.fn(get), throwError(error)]
            ])
            .dispatch(personalSequenceTypeChange)
            .run();
    });

    it('success to change personal auto height card.', () => {
        const fakePersonal = { autoHideCard: false };

        return expectSaga(changePersonalAutoHideCard)
            .provide([
                [call(get, PERSONAL_SETTING), fakePersonal]
            ])
            .put(IDBSet({
                key: PERSONAL_SETTING,
                value: {
                    ...fakePersonal,
                    autoHideCard: !fakePersonal.autoHideCard
                }
            }))
            .dispatch(personalAutoHideCardChange)
            .run();
    });

    it('fail to change personal auto height card.', () => {
        const error = new Error('error');

        return expectSaga(changePersonalAutoHideCard)
            .provide([
                [matchers.call.fn(get), throwError(error)]
            ])
            .dispatch(personalAutoHideCardChange)
            .run();
    });

    it('success to change personal keep screen on.', () => {
        const fakePersonal = { keepScreenOn: false };

        return expectSaga(changePersonalKeepScreenOn)
            .provide([
                [call(get, PERSONAL_SETTING), fakePersonal]
            ])
            .put(IDBSet({
                key: PERSONAL_SETTING,
                value: {
                    ...fakePersonal,
                    keepScreenOn: !fakePersonal.keepScreenOn
                }
            })).dispatch(personalKeepScreenOnChange)
            .run();
    });

    it('fail to change personal keep on screen on.', () => {
        const error = new Error('error');

        return expectSaga(changePersonalKeepScreenOn)
            .provide([
                [matchers.call.fn(get), throwError(error)]
            ]).dispatch(personalKeepScreenOnChange)
            .run();
    });

    it('success to change personal number color.', () => {
        const fakePayload = { payload: {} };
        const fakePersonal = { theme: {} };

        return expectSaga(changePersonalNumberColor, fakePayload)
            .provide([
                [call(get, PERSONAL_SETTING), fakePersonal]
            ])
            .put(IDBSet({
                key: PERSONAL_SETTING,
                value: {
                    ...fakePersonal,
                    theme: {
                        ...fakePersonal.theme,
                        [fakePayload.type]: {
                            ...fakePersonal.theme[fakePayload.type],
                            ...fakePayload.change
                        }
                    }
                }
            }))
            .dispatch(personalNumberColorChange)
            .run();
    });

    it('fail to change personal number color.', () => {
        const fakePayload = { payload: {} };
        const error = new Error('error');

        return expectSaga(changePersonalNumberColor, fakePayload)
            .provide([
                [matchers.call.fn(get), throwError(error)]
            ])
            .dispatch(personalNumberColorChange)
            .run();
    });
});