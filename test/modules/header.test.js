import each from 'jest-each';
import headerReducer, {
    headerTitleDefault,
    headerTitleSet, nextLinkActSetting,
    prevLinkActClose,
    prevLinkActGoBack
} from '../../src/modules/header';
import { FUNC_CLOSE, FUNC_GO_BACK, FUNC_SETTING } from '../../src/constants';

describe('test header modules', () => {
    each([
        [
            'headerTitleDefault',
            headerTitleDefault,
            {
                type: '@@HEADER/TITLE_DEFAULT',
                payload: {}
            }
        ],
        [
            'headerTitleSet',
            headerTitleSet,
            {
                type: '@@HEADER/TITLE_SET',
                payload: {}
            }
        ],
        [
            'prevLinkActGoBack',
            prevLinkActGoBack,
            {
                type: '@@HEADER/PREV_LINK_ACT_GO_BACK',
                payload: {}
            }
        ],
        [
            'prevLinkActClose',
            prevLinkActClose,
            {
                type: '@@HEADER/PREV_LINK_ACT_CLOSE',
                payload: {}
            }
        ],
        [
            'nextLinkActSetting',
            nextLinkActSetting,
            {
                type: '@@HEADER/NEXT_LINK_ACT_SETTING',
                payload: {}
            }
        ]
    ]).it('should dispatch %s action to change header.', (name, actionCreator, expected) => {
        expect(actionCreator()).toEqual(expected);
    });

    each([
        [
            'headerTitleDefault',
            headerTitleDefault,
            {
                title: 'Scrum Poker',
                prev: null,
                next: FUNC_SETTING
            }
        ],
        [
            'prevLinkActGoBack',
            prevLinkActGoBack,
            {
                title: 'Scrum Poker',
                prev: FUNC_GO_BACK,
                next: null
            }
        ],
        [
            'prevLinkActClose',
            prevLinkActClose,
            {
                title: 'Scrum Poker',
                prev: FUNC_CLOSE,
                next: null
            }
        ],
        [
            'nextLinkActSetting',
            nextLinkActSetting,
            {
                title: 'Scrum Poker',
                prev: null,
                next: FUNC_SETTING
            }
        ]
    ]).it('should merge %s and remove duplicated property when action is dispatched.',
        (name, actionCreator, expected) => {
            const state = {
                title: 'Scrum Poker',
                prev: null,
                next: FUNC_SETTING
            };

            const result = headerReducer(state, actionCreator());

            expect(result).toEqual(expected);
        });

    it('should merge headerTitleSet and remove duplicated property when action is dispatched.', () => {
        const state = {
            title: 'Scrum Poker',
            prev: null,
            next: FUNC_SETTING
        };

        const result = headerReducer(state, headerTitleSet({
            title: 'test'
        }));

        expect(result).toEqual({
            title: 'test',
            prev: null,
            next: FUNC_SETTING
        });
    });
});
