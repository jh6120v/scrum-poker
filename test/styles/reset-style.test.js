import { render } from '@testing-library/react';
import ResetStyle from '../../src/styles/reset-style';
import 'jest-styled-components';

describe('test reset style.', () => {
    it('reset style snap shot', () => {
        const { container } = render(ResetStyle.globalStyle.rules);
        expect(container.textContent).toMatchSnapshot();
    });
});
