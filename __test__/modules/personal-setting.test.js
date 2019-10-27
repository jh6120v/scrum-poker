import each from 'jest-each';
import personalSettingReducer, {
    personalAutoHideCardChange,
    personalKeepScreenOnChange,
    personalNumberColorChange,
    personalSequenceTypeChange,
    personalSettingReset,
    personalSettingSet
} from '../../src/modules/personal-setting';
import { PERSONAL_DEFAULT_SETTING } from '../../src/constants';

describe('test personal-setting modules.', () => {
    each([
        [
            'personalSettingSet',
            personalSettingSet,
            {
                type: '@@PERSONAL_SETTING/SETTING_SET',
                payload: {}
            }
        ],
        [
            'personalSettingReset',
            personalSettingReset,
            {
                type: '@@PERSONAL_SETTING/SETTING_RESET',
                payload: {}
            }
        ],
        [
            'personalSequenceTypeChange',
            personalSequenceTypeChange,
            {
                type: '@@PERSONAL_SETTING/SEQUENCE_TYPE_CHANGE',
                payload: {}
            }
        ],
        [
            'personalAutoHideCardChange',
            personalAutoHideCardChange,
            {
                type: '@@PERSONAL_SETTING/AUTO_HIDE_CARD_CHANGE',
                payload: {}
            }
        ],
        [
            'personalKeepScreenOnChange',
            personalKeepScreenOnChange,
            {
                type: '@@PERSONAL_SETTING/KEEP_SCREEN_ON_CHANGE',
                payload: {}
            }
        ],
        [
            'personalNumberColorChange',
            personalNumberColorChange,
            {
                type: '@@PERSONAL_SETTING/NUMBER_COLOR_CHANGE',
                payload: {}
            }
        ]
    ]).it('should dispatch %s action to change personal-setting.', (name, actionCreator, expected) => {
        expect(actionCreator()).toEqual(expected);
    });

    each([
        [
            'personalSettingReset',
            personalSettingReset,
            {
                ...PERSONAL_DEFAULT_SETTING,
                sequenceType: 'planning-poker'
            }
        ],
        [
            'personalAutoHideCardChange',
            personalAutoHideCardChange,
            {
                ...PERSONAL_DEFAULT_SETTING,
                autoHideCard: true
            }
        ],
        [
            'personalKeepScreenOnChange',
            personalKeepScreenOnChange,
            {
                ...PERSONAL_DEFAULT_SETTING,
                keepScreenOn: true
            }
        ]
    ]).it('should merge %s and remove duplicated property when action is dispatched.',
        (name, actionCreator, expected) => {
            const result = personalSettingReducer(PERSONAL_DEFAULT_SETTING, actionCreator());

            expect(result).toEqual(expected);
        });

    it('should merge personalSettingSet and remove duplicated property when action is dispatched.', () => {
        const result = personalSettingReducer(PERSONAL_DEFAULT_SETTING, personalSettingSet({
            sequenceType: 'test',
            keepScreenOn: true,
            autoHideCard: true
        }));

        expect(result).toEqual({
            ...PERSONAL_DEFAULT_SETTING,
            sequenceType: 'test',
            keepScreenOn: true,
            autoHideCard: true
        });
    });

    it('should merge personalSequenceTypeChange and remove duplicated property when action is dispatched.', () => {
        const result = personalSettingReducer(PERSONAL_DEFAULT_SETTING, personalSequenceTypeChange('natural'));

        expect(result).toEqual({
            ...PERSONAL_DEFAULT_SETTING,
            sequenceType: 'natural'
        });
    });

    it('should merge personalNumberColorChange and remove duplicated property when action is dispatched.', () => {
        const result = personalSettingReducer(PERSONAL_DEFAULT_SETTING, personalNumberColorChange({
            type: 'cardList',
            change: {
                borderColor: '#000',
                bgColor: '#d4ad28',
                fontColor: '#93ffba'
            }
        }));

        expect(result).toEqual({
            sequenceType: '',
            theme: {
                cardList: {
                    borderColor: '#000',
                    bgColor: '#d4ad28',
                    fontColor: '#93ffba'
                },
                cardFront: {
                    bgColor: '#FFFFFF',
                    fontColor: '#5AC9E8'
                },
                cardBack: {
                    borderColor: '#FFFFFF',
                    bgColor: '#5bb1d4',
                    fontColor: '#FFFFFF'
                }
            },
            keepScreenOn: false,
            autoHideCard: false
        });
    });
});
