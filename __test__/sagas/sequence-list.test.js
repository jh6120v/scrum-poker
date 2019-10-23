import { call } from 'redux-saga/effects';
import { get } from 'idb-keyval';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { getSequenceListDataApi } from '../../src/sagas/api';
import { fetchSequenceListData } from '../../src/sagas/sequence-list';
import { spinnerHide, spinnerShow } from '../../src/modules/spinner';
import { PERSONAL_DEFAULT_SETTING, PERSONAL_SETTING, POINT_SEQUENCE_LIST } from '../../src/constants';
import { IDBSet } from '../../src/modules/indexed-db';
import { sequenceListDataFetch, sequenceListDataSet } from '../../src/modules/sequence-list';
import { pointListDataSet } from '../../src/modules/point-list';
import { personalSettingSet } from '../../src/modules/personal-setting';

describe('test sequence-list saga', () => {
    it('fetch sequence list when local data not exist.', () => {
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

        return expectSaga(fetchSequenceListData)
            .provide([
                [call(getSequenceListDataApi), fakeSequenceList],
                [call(get, PERSONAL_SETTING), undefined],
            ])
            .put(spinnerShow())
            .put(IDBSet({
                key: POINT_SEQUENCE_LIST,
                value: fakeSequenceList
            }))
            .put(sequenceListDataSet({
                sequenceList: fakeSequenceList
            }))
            .put(pointListDataSet({
                listName: 'planning-poker',
                listData: fakeSequenceList['planning-poker']
            }))
            .put(personalSettingSet({
                ...PERSONAL_DEFAULT_SETTING,
                sequenceType: 'planning-poker'
            }))
            .put(spinnerHide())
            .dispatch(sequenceListDataFetch())
            .run();
    });

    it('fetch sequence list when local data exist.', () => {
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

        const fakeSettings = {
            sequenceType: 'planning-poker'
        };

        return expectSaga(fetchSequenceListData)
            .provide([
                [call(getSequenceListDataApi), fakeSequenceList],
                [call(get, PERSONAL_SETTING), fakeSettings],
            ])
            .put(spinnerShow())
            .put(IDBSet({
                key: POINT_SEQUENCE_LIST,
                value: fakeSequenceList
            }))
            .put(sequenceListDataSet({
                sequenceList: fakeSequenceList
            }))
            .put(pointListDataSet({
                listName: fakeSettings.sequenceType,
                listData: fakeSequenceList[fakeSettings.sequenceType]
            }))
            .put(personalSettingSet(fakeSettings))
            .dispatch(sequenceListDataFetch())
            .run();
    });

    it('handle errors.', () => {
        const error = new Error('error');

        return expectSaga(fetchSequenceListData)
            .provide([
                [matchers.call.fn(getSequenceListDataApi), throwError(error)]
            ])
            .put(spinnerHide())
            .dispatch(sequenceListDataFetch())
            .run();
    });
});
