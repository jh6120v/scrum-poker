import { render } from '@testing-library/react';
import GlobalStyle from '../../src/styles/global-style';
import 'jest-styled-components';

describe('test global style.', () => {
    it('global style snap shot', () => {
        const { container } = render(GlobalStyle.globalStyle.rules);
        expect(container.textContent).toMatchSnapshot();
    });
});
