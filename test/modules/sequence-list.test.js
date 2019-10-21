import each from 'jest-each';
import sequenceListReducer, { sequenceListDataFetch, sequenceListDataSet } from '../../src/modules/sequence-list';

describe('test sequence-list test.', () => {
    each([
        [
            'sequenceListDataFetch',
            sequenceListDataFetch,
            {
                type: '@@SEQUENCE_LIST/LIST_DATA_FETCH',
                payload: {}
            }
        ],
        [
            'sequenceListDataSet',
            sequenceListDataSet,
            {
                type: '@@SEQUENCE_LIST/LIST_DATA_SET',
                payload: {}
            }
        ]
    ]).it('should dispatch %s action to change sequence-list.', (name, actionCreator, expected) => {
        expect(actionCreator()).toEqual(expected);
    });

    it('should merge sequenceListDataSet and remove duplicated property when action is dispatched.', () => {
        const state = {
            sequenceList: {},
            cache: false
        };

        const result = sequenceListReducer(state, sequenceListDataSet({
            sequenceList: {
                test: 'list'
            }
        }));

        expect(result).toEqual({
            sequenceList: {
                test: 'list'
            },
            cache: true
        });
    });
});
