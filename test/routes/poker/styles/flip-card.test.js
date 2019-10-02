import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { FlipCard, FlipCardFront, FlipCardBack } from '../../../../src/routes/poker/styles/flip-card';

describe('test flip-card style.', () => {
    it('test <FlipCard /> snapshot.', () => {
        const { container } = render(<FlipCard />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <FlipCard /> when render with props.', () => {
        const { container } = render(<FlipCard width="100px" height="100px" duration={300} active first />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100px');
        expect(tree).toHaveStyleRule('height', '100px');
        expect(tree).toHaveStyleRule('animation', 'none');
        expect(tree).toHaveStyleRule('animation-fill-mode', 'forwards');
        expect(tree).toHaveStyleRule('animation-duration', '300ms');
        expect(tree).toHaveStyleRule('transform-style', 'preserve-3d');
        expect(tree).toHaveStyleRule('position', 'relative');
        expect(tree).toHaveStyleRule('z-index', '1');
    });

    it('test <FlipCardFront /> snapshot.', () => {
        const { container } = render(<FlipCardFront />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <FlipCardFront /> when render with props.', () => {
        const { container } = render(<FlipCardFront />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('position', 'absolute');
        expect(tree).toHaveStyleRule('top', '0');
        expect(tree).toHaveStyleRule('left', '0');
        expect(tree).toHaveStyleRule('right', '0');
        expect(tree).toHaveStyleRule('bottom', '0');
        expect(tree).toHaveStyleRule('backface-visibility', 'hidden');
    });

    it('test <FlipCardBack /> snapshot.', () => {
        const { container } = render(<FlipCardBack />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <FlipCardBack /> when render with props.', () => {
        const { container } = render(<FlipCardBack />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('position', 'absolute');
        expect(tree).toHaveStyleRule('top', '0');
        expect(tree).toHaveStyleRule('left', '0');
        expect(tree).toHaveStyleRule('right', '0');
        expect(tree).toHaveStyleRule('bottom', '0');
        expect(tree).toHaveStyleRule('backface-visibility', 'hidden');
        expect(tree).toHaveStyleRule('transform', 'rotateY(180deg)');
    });
});
