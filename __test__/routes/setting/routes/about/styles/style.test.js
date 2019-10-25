import 'jest-styled-components';
import { render } from '@testing-library/react';
import React from 'react';
import { AboutContent, AppName } from '../../../../../../src/routes/setting/routes/about/styles';

describe('test about style.', () => {
    it('test <AboutContent /> snapshot.', () => {
        const { container } = render(<AboutContent />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <AboutContent /> when render it.', () => {
        const { container } = render(<AboutContent />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '20px');
        expect(tree).toHaveStyleRule('font-family', 'Arial,serif');
        expect(tree).toHaveStyleRule('font-size', '.8rem');
        expect(tree).toHaveStyleRule('line-height', '1.2rem');
    });

    it('test <AppName /> snapshot.', () => {
        const { container } = render(<AppName />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <AppName /> when render it.', () => {
        const { container } = render(<AppName />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('text-align', 'center');
        expect(tree).toHaveStyleRule('font-size', '1.5rem');
        expect(tree).toHaveStyleRule('margin-bottom', '15px');
        expect(tree).toHaveStyleRule('font-weight', 'bold');
    });
});
