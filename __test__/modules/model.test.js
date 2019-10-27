import each from 'jest-each';
import modelReducer, { modelHide, modelShow } from '../../src/modules/model';

describe('test model modules.', () => {
    each([
        [
            'modelShow',
            modelShow,
            {
                type: '@@MODEL/MODEL_SHOW',
                payload: {}
            }
        ],
        [
            'modelHide',
            modelHide,
            {
                type: '@@MODEL/MODEL_HIDE',
                payload: {}
            }
        ],
    ]).it('should dispatch %s action to change model.', (name, actionCreator, expected) => {
        expect(actionCreator()).toEqual(expected);
    });

    each([
        [
            'modelShow',
            modelShow,
            {
                isShow: true
            }
        ],
        [
            'modelHide',
            modelHide,
            {
                isShow: false
            }
        ]
    ]).it('should merge %s and remove duplicated property when action is dispatched.',
        (name, actionCreator, expected) => {
            const state = {
                isShow: false
            };

            const result = modelReducer(state, actionCreator());

            expect(result).toEqual(expected);
        });
});
