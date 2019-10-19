import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ConfirmButton, ModelContent, ModelFooter, ModelShadow, ModelWrap } from '../../src/styles/model-style';

describe('test model-style', () => {
    it('test <ModelShadow /> snapshot.', () => {
        const { container } = render(<ModelShadow />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ModelShadow /> when render it.', () => {
        const { container } = render(<ModelShadow />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('position', 'fixed');
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('left', '0');
        expect(tree).toHaveStyleRule('top', '0');
        expect(tree).toHaveStyleRule('background-color', 'rgba(0,0,0,.3)');
        expect(tree).toHaveStyleRule('z-index', '10');
    });

    it('test <ModelWrap /> snapshot.', () => {
        const { container } = render(<ModelWrap />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ModelWrap /> when render it.', () => {
        const { container } = render(<ModelWrap />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('position', 'fixed');
        expect(tree).toHaveStyleRule('left', '50%');
        expect(tree).toHaveStyleRule('top', '50%');
        expect(tree).toHaveStyleRule('width', '250px');
        expect(tree).toHaveStyleRule('max-width', '90%');
        expect(tree).toHaveStyleRule('background-color', '#fff');
        expect(tree).toHaveStyleRule('z-index', '11');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'column');
        expect(tree).toHaveStyleRule('transform', 'translateX(-50%) translateY(-50%)');
        expect(tree).toHaveStyleRule('border-radius', '5px');
        expect(tree).toHaveStyleRule('padding', '20px 15px 15px');
        expect(tree).toHaveStyleRule('font-family', 'Arial,serif');
    });

    it('test <ModelContent /> snapshot.', () => {
        const { container } = render(<ModelContent />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ModelContent /> when render it.', () => {
        const { container } = render(<ModelContent />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '0 0 20px 0');
    });

    it('test <ModelFooter /> snapshot.', () => {
        const { container } = render(<ModelFooter />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ModelFooter /> when render it.', () => {
        const { container } = render(<ModelFooter />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '0 10px');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
    });

    it('test <ConfirmButton /> snapshot.', () => {
        const { container } = render(<ConfirmButton />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ConfirmButton /> when render it.', () => {
        const { container } = render(<ConfirmButton />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('padding', '10px 15px');
        expect(tree).toHaveStyleRule('margin', '0 5px');
        expect(tree).toHaveStyleRule('background-color', '#5AC9E8');
        expect(tree).toHaveStyleRule('color', '#FFF');
        expect(tree).toHaveStyleRule('font-size', '.8rem');
        expect(tree).toHaveStyleRule('cursor', 'pointer');
        expect(tree).toHaveStyleRule('border-radius', '2px');
    });
});
