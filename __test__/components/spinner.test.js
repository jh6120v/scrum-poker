import React from 'react';
import { render } from '@testing-library/react';
import Spinner from '../../src/components/spinner';

describe('test <Spinner />', () => {
    it('<Spinner /> snapshot.', () => {
        const { container } = render(<Spinner show />);
        expect(container.firstChild).toMatchSnapshot();
    });
});