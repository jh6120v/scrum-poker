import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../src/components/header';
import { FUNC_CLOSE, FUNC_GO_BACK, FUNC_SETTING } from '../../src/constants';

describe('test header component.', () => {
    it('test <Header /> snapshot.', () => {
        const { container } = render(<Header />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Header /> when set title.', () => {
        const { getByTestId } = render(<Header title="test_title" />);

        expect(getByTestId('display_title').innerHTML).toEqual('test_title');
    });

    it('test <Header /> when go back btn exist.', () => {
        const { getByTestId } = render(<Header prev={FUNC_GO_BACK} />);

        expect(getByTestId('display_prev_link').querySelector('a').innerHTML).toEqual('<svg class="sc-bdVaJa fUuvxv" fill="#fff" width="25px" height="25px" viewBox="0 0 1024 1024" rotate="0"><path d="M704 256.8l-64.6-64.8-319.4 320 319.4 320 64.6-64.8-254.6-255.2z"></path></svg>');
    });

    it('test <Header /> when close btn exist.', () => {
        const { getByTestId } = render(<Header prev={FUNC_CLOSE} />);

        expect(getByTestId('display_prev_link').querySelector('div').innerHTML).toEqual('<svg class="sc-bdVaJa fUuvxv" fill="#fff" width="25px" height="25px" viewBox="0 0 1024 1024" rotate="0"><path d="M810 273.596l-59.596-59.596-238.404 238.404-238.404-238.404-59.596 59.596 238.404 238.404-238.404 238.404 59.596 59.596 238.404-238.404 238.404 238.404 59.596-59.596-238.404-238.404z"></path></svg>');
    });

    it('test <Header /> when setting btn exist.', () => {
        const { getByTestId } = render(<Header next={FUNC_SETTING} />);

        expect(getByTestId('display_next_link').querySelector('div').innerHTML).toEqual('');
    });
});
