import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
    Container, HeaderStyle, NextLink, PrevLink, Title, Wrapper
} from '../../src/styles/layout-style';

describe('test layout-style.', () => {
    it('test <Wrapper /> snapshot.', () => {
        const { container } = render(<Wrapper />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Wrapper /> when render it.', () => {
        const { container } = render(<Wrapper />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('max-width', '400px');
        expect(tree).toHaveStyleRule('min-height', '100%');
        expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
        expect(tree).toHaveStyleRule('flex-direction', 'column');
        expect(tree).toHaveStyleRule('margin', '0');
        expect(tree).toHaveStyleRule('margin', '0 auto', {
            media: '(min-width:480px)'
        });
    });

    it('test <HeaderStyle /> snapshot.', () => {
        const { container } = render(<HeaderStyle />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <HeaderStyle /> when render it.', () => {
        const { container } = render(<HeaderStyle />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', 'calc(44px + env(safe-area-inset-top))');
        expect(tree).toHaveStyleRule('position', 'fixed');
        expect(tree).toHaveStyleRule('left', '0');
        expect(tree).toHaveStyleRule('top', '0');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'space-between');
        expect(tree).toHaveStyleRule('color', '#fff');
        expect(tree).toHaveStyleRule('padding', 'env(safe-area-inset-top) 5px 0 5px');
        expect(tree).toHaveStyleRule('overflow', 'hidden');
        expect(tree).toHaveStyleRule('background-color', '#6cb8cf');
        expect(tree).toHaveStyleRule('z-index', '3');
        expect(tree).toHaveStyleRule('left', '50%', {
            media: '(min-width:480px)'
        });
        expect(tree).toHaveStyleRule('width', '400px', {
            media: '(min-width:480px)'
        });
        expect(tree).toHaveStyleRule('margin-left', '-200px', {
            media: '(min-width:480px)'
        });
    });

    it('test <Title /> snapshot.', () => {
        const { container } = render(<Title />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Title /> when render it.', () => {
        const { container } = render(<Title />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('font-family', '\'Fredoka One\',Baloo');
        expect(tree).toHaveStyleRule('font-size', '20px');
        expect(tree).toHaveStyleRule('font-weight', 'bold');
    });

    it('test <PrevLink /> snapshot', () => {
        const { container } = render(<PrevLink />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PrevLink /> when render it.', () => {
        const { container } = render(<PrevLink />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('min-width', '25px');
        expect(tree).toHaveStyleRule('height', '25px');
    });

    it('test <NextLink /> snapshot.', () => {
        const { container } = render(<NextLink />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <NextLink /> when render it.', () => {
        const { container } = render(<NextLink />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('min-width', '25px');
        expect(tree).toHaveStyleRule('height', '25px');
    });

    it('test <Container /> snapshot.', () => {
        const { container } = render(<Container />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Container /> when render it.', () => {
        const { container } = render(<Container />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('flex-grow', '1');
        expect(tree).toHaveStyleRule('flex-shrink', '1');
        expect(tree).toHaveStyleRule('flex-basis', 'auto');
    });
});