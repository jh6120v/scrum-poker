import each from 'jest-each';
import SpinnerReducer, { spinnerShow, spinnerHide } from '../../src/modules/spinner';

describe('test spinner module.', () => {
    each([
        [
            'spinnerShow',
            spinnerShow,
            {
                type: '@@SPINNER/SPINNER_SHOW',
                payload: {}
            }
        ],
        [
            'spinnerHide',
            spinnerHide,
            {
                type: '@@SPINNER/SPINNER_HIDE',
                payload: {}
            }
        ]
    ]).it('should dispatch %s action to show/hide spinner.', (name, func, expected) => {
        expect(func()).toEqual(expected);
    });

    each([
        [
            'spinnerShow',
            spinnerShow,
            {
                isShow: true
            }
        ],
        [
            'spinnerHide',
            spinnerHide,
            {
                isShow: false
            }
        ]
    ]).it('should merge %s and remove duplicated property when action is dispatched.',
        (name, actionCreator, expected) => {
            const state = {
                isShow: false
            };

            const result = SpinnerReducer(state, actionCreator());

            expect(result).toEqual(expected);
        });
});