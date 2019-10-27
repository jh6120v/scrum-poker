import pointListReducer, { pointListDataSet } from '../../src/modules/point-list';

describe('test point-list modules.', () => {
    it('should dispatch pointListDataSet action to change point-list.', () => {
        expect(pointListDataSet()).toEqual({
            type: '@@POINT_LIST/LIST_DATA_SET',
            payload: {}
        });
    });

    it('should merge pointListDataSet and remove duplicated property when action is dispatched.', () => {
        const state = {
            listName: '',
            listData: []
        };

        const result = pointListReducer(state, pointListDataSet({
            listName: 'test',
            listData: [
                'testData'
            ]
        }));

        expect(result).toEqual({
            listName: 'test',
            listData: [
                'testData'
            ]
        });
    });
});
