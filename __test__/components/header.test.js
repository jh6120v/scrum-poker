import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Router } from 'react-router';
import Header from '../../src/components/header';
import { FUNC_CLOSE, FUNC_GO_BACK, FUNC_SETTING } from '../../src/constants';
import { history } from '../../src/store';

describe('test header component.', () => {
    it('test <Header /> snapshot.', () => {
        cleanup();

        const { container } = render(<Header />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Header /> when set title.', () => {
        cleanup();

        const { getByTestId } = render(<Header title="test_title" />);

        expect(getByTestId('display_title').innerHTML).toEqual('test_title');
    });

    it('test <Header /> when go back btn exist.', () => {
        cleanup();

        const { getByTestId } = render(<Header prev={FUNC_GO_BACK} />);

        expect(getByTestId('display_prev_link').querySelector('a').innerHTML).toEqual('<svg class="sc-bdVaJa fUuvxv" fill="#fff" width="25px" height="25px" viewBox="0 0 1024 1024" rotate="0"><path d="M704 256.8l-64.6-64.8-319.4 320 319.4 320 64.6-64.8-254.6-255.2z"></path></svg>');
    });

    it('test <Header /> when go back click once', () => {
        cleanup();

        history.goBack = jest.fn();

        const { getByTestId } = render(<Header prev={FUNC_GO_BACK} />);

        fireEvent.click(getByTestId('display_prev_link').querySelector('a'));

        expect(history.goBack).toHaveBeenCalledTimes(1);
    });

    it('test <Header /> when close btn exist.', () => {
        cleanup();

        const { getByTestId } = render(<Header prev={FUNC_CLOSE} />);

        expect(getByTestId('display_prev_link').querySelector('div').innerHTML).toEqual('<svg class="sc-bdVaJa fUuvxv" fill="#fff" width="25px" height="25px" viewBox="0 0 1024 1024" rotate="0"><path d="M810 273.596l-59.596-59.596-238.404 238.404-238.404-238.404-59.596 59.596 238.404 238.404-238.404 238.404 59.596 59.596 238.404-238.404 238.404 238.404 59.596-59.596-238.404-238.404z"></path></svg>');
    });

    it('test <Header /> when setting btn exist.', () => {
        cleanup();

        const { getByTestId } = render(<Router history={history}><Header next={FUNC_SETTING} /></Router>);

        expect(getByTestId('display_next_link').querySelector('div').innerHTML).toEqual('<a href="/setting"><svg class="sc-bdVaJa fUuvxv" fill="#fff" width="25px" height="25px" viewBox="0 0 1024 1024" rotate="0"><path d="M822.2 512c0-47.8 29.6-85.6 73.8-111.6-8-26.6-18.6-52.4-31.6-76.4-49.8 13-90-6.4-124-40.4-33.8-33.8-44.2-74.2-31.2-124-24-13-49.6-23.6-76.4-31.6-26 44.4-72.8 73.8-120.8 73.8-47.8 0-94.8-29.4-120.8-73.8-26.8 8-52.4 18.6-76.4 31.6 13 49.8 2.6 90-31.2 124-33.8 33.8-74.2 53.4-123.8 40.4-13.2 24-23.8 49.6-31.8 76.4 44.4 26 74 63.8 74 111.6s-29.6 94.8-74 120.8c8 26.8 18.6 52.4 31.6 76.4 49.8-13 90-2.6 123.8 31.2 34 33.8 44.2 74.2 31.2 124 24.2 13 49.6 23.6 76.4 31.6 26-44.4 73-73.8 120.8-73.8s94.8 29.4 120.8 73.8c26.8-8 52.4-18.6 76.4-31.6-13-49.8-2.6-90 31.2-124 33.8-33.8 74.2-53.4 124-40.4 13-24.2 23.6-49.8 31.6-76.4-44.2-26-73.6-63.8-73.6-111.6zM512 704c-105.8 0-192-86-192-192s86-192 192-192 192 86 192 192-86 192-192 192z"></path></svg></a>');
    });
});
