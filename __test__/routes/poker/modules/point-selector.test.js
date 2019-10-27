import each from 'jest-each';
import PointSelectorReducer, {
    pointSelectedSet,
    pointSelectedClear,
    pointSelectedFlip
} from '../../../../src/routes/poker/modules/point-selector';

describe('test PointSelector module.', () => {
    each([
        [
            'pointSelectedSet',
            pointSelectedSet,
            {
                type: '@@POINT_SELECTOR/POINT_SELECTED_SET',
                payload: {}
            }
        ],
        [
            'pointSelectedClear',
            pointSelectedClear,
            {
                type: '@@POINT_SELECTOR/POINT_SELECTED_CLEAR',
                payload: {}
            }
        ],
        [
            'pointSelectedFlip',
            pointSelectedFlip,
            {
                type: '@@POINT_SELECTOR/POINT_SELECTED_FLIP',
                payload: {}
            }
        ]
    ]).it('should dispatch %s action to set selected data.', (name, actionCreator, expected) => {
        expect(actionCreator()).toEqual(expected);
    });

    each([
        [
            'pointSelectedSet',
            {
                isSelect: true,
                selected: '5',
                img: 3,
                itemFlip: true
            },
            pointSelectedSet,
            {
                isSelect: true,
                selected: '5',
                img: 3,
                itemFlip: true
            }
        ],
        [
            'pointSelectedClear',
            {},
            pointSelectedClear,
            {
                isSelect: false,
                selected: '',
                img: 1,
                itemFlip: true
            }
        ],
        [
            'pointSelectedFlip',
            {
                itemFlip: true
            },
            pointSelectedFlip,
            {
                isSelect: false,
                selected: '',
                img: 1,
                itemFlip: false
            }
        ]
    ]).it('should merge %s and remove duplicated property when action is dispatched.',
        (name, input, actionCreator, expected) => {
            const state = {
                isSelect: false,
                selected: '',
                img: 1,
                itemFlip: true
            };

            const result = PointSelectorReducer(state, actionCreator(input));

            expect(result).toEqual(expected);
        });
});
