import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { SpinnerWrap, BallScaleMultiple, BallScaleMultipleInner, LazyLoad } from '../../src/styles/common-style';

describe('test common-style style.', () => {
    it('<SpinnerWrap> snapshot.', () => {
        const { container } = render(<SpinnerWrap />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <SpinnerWrap> style when render it.', () => {
        const { container } = render(<SpinnerWrap show />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('width', '100vw');
        expect(tree).toHaveStyleRule('height', '100vh');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('position', 'fixed');
        expect(tree).toHaveStyleRule('opacity', '1');
        expect(tree).toHaveStyleRule('visibility', 'visible');
        expect(tree).toHaveStyleRule('transition', 'all .5s ease-in-out');
        expect(tree).toHaveStyleRule('z-index', '999');
    });

    it('test <SpinnerWrap> when set show to false', () => {
        const { container } = render(<SpinnerWrap show={false} />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('opacity', '0');
        expect(tree).toHaveStyleRule('visibility', 'hidden');
    });

    it('test <BallScaleMultiple /> snapshot.', () => {
        const { container } = render(<BallScaleMultiple />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <BallScaleMultiple> style when render it.', () => {
        const { container } = render(<BallScaleMultiple />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('position', 'relative');
        expect(tree).toHaveStyleRule('transform', 'translateY(-30px)');
    });

    it('test <BallScaleMultipleInner /> snapshot.', () => {
        const { container } = render(<BallScaleMultipleInner />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <BallScaleMultipleInner> style when render it.', () => {
        const { container } = render(<BallScaleMultipleInner />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('background-color', '#fff');
        expect(tree).toHaveStyleRule('border-radius', '100%');
        expect(tree).toHaveStyleRule('animation-fill-mode', 'both');
        expect(tree).toHaveStyleRule('position', 'absolute');
        expect(tree).toHaveStyleRule('left', '-30px');
        expect(tree).toHaveStyleRule('top', '0');
        expect(tree).toHaveStyleRule('opacity', '0');
        expect(tree).toHaveStyleRule('margin', '0');
        expect(tree).toHaveStyleRule('width', '60px');
        expect(tree).toHaveStyleRule('height', '60px');
        expect(tree).toHaveStyleRule('animation', 'cWzfKs 1s 0s linear infinite');
        expect(tree).toHaveStyleRule('animation-delay', '-0.4s', {
            modifier: '&:nth-child(2)'
        });
        expect(tree).toHaveStyleRule('animation-delay', '-0.2s', {
            modifier: '&:nth-child(3)'
        });
    });

    it('test <LazyLoad /> snapshot.', () => {
        const { container } = render(<LazyLoad />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <LazyLoad /> style when render it.', () => {
        const { container } = render(<LazyLoad />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('position', 'fixed');
        expect(tree).toHaveStyleRule('top', '0');
        expect(tree).toHaveStyleRule('right', '0');
        expect(tree).toHaveStyleRule('bottom', '0');
        expect(tree).toHaveStyleRule('left', '0');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('color', '#FFF');
    });
});
