import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { LazyLoadWrap } from '../../src/styles/common-style';

describe('test common-style style.', () => {
    it('<LazyLoadWrap> snapshot.', () => {
        const { container } = render(<LazyLoadWrap />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <LazyLoadWrap> style when render it.', () => {
        const { container } = render(<LazyLoadWrap />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100vw');
        expect(tree).toHaveStyleRule('height', '100vh');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
    });
});
