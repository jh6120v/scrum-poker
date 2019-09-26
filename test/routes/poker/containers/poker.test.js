import React from 'react';
import { render } from '@testing-library/react';
import Poker from '../../../../src/routes/poker/containers/poker';

describe('test <Poker />', () => {
    const { container, getByTestId } = render(<Poker />);

    it('test <Poker /> snapshot', () => {
        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Poker /> and find header', () => {
        const elem = getByTestId('display_header');

        expect(elem.textContent).toBe('Scrum Poker');
    });
});
