import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../../src/routes/home/containers/home';

describe('test <Home />', () => {
    const { container, getByTestId } = render(<Home />);

    it('<Home /> snapshot', () => {
        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Home /> and find title', () => {
        const elem = getByTestId('display_title');

        expect(elem.textContent).toBe('Welcome to React-Redux-App!');
    });
});
