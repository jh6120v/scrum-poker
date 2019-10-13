import each from 'jest-each';
import PointListReducer, {
    pointListDataFetch,
    pointListDataSet
} from '../../../../src/modules/point-list';

describe('test point list module.', () => {
    each([
        [
            'pointListDataFetch',
            pointListDataFetch,
            {
                type: '@@POKER/POINT_LIST/LIST_DATA_FETCH',
                payload: {}
            }
        ],
        [
            'pointListDataSet',
            pointListDataSet,
            {
                type: '@@POKER/POINT_LIST/LIST_DATA_SET',
                payload: {}
            }
        ]
    ]).it('should dispatch %s action to fetch/set data.', (name, actionCreator, expected) => {
        expect(actionCreator()).toEqual(expected);
    });

    it('should merge and remove duplicated property when action is dispatched', () => {
        const state = {
            listData: []
        };

        const expected = {
            listData: [
                { test: 'TEST' }
            ]
        };

        const result = PointListReducer(state, pointListDataSet({
            listData: [
                { test: 'TEST' }
            ]
        }));

        expect(result).toEqual(expected);
    });
});