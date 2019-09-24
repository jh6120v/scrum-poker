import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
    Container,
    Logo,
    Title,
    LogoLink
} from '../../../../src/routes/home/styles';

describe('test home styles', () => {
    it('match <Container /> snapshot', () => {
        const { container } = render(<Container />);
        const tree = container.firstChild;
        expect(tree).toMatchSnapshot();
    });

    it('match <Logo /> snapshot', () => {
        const { container } = render(<Logo />);
        const tree = container.firstChild;
        // const tree = renderer.create(<Logo />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('match <Title /> snapshot', () => {
        const { container } = render(<Title />);
        const tree = container.firstChild;
        // const tree = renderer.create(<Title />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('match <LogoLink /> snapshot', () => {
        const { container } = render(<LogoLink />);
        const tree = container.firstChild;
        // const tree = renderer.create(<LogoLink />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('test <Logo /> style when prop background images', () => {
        const { container } = render(<Logo img="fakeImg" />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', 'calc((100% - 100px) / 2)');
        expect(tree).toHaveStyleRule('height', '200px');
        expect(tree).toHaveStyleRule('background', 'url(fakeImg) no-repeat center');
        expect(tree).toHaveStyleRule('background-size', 'contain');
        expect(tree).toHaveStyleRule('animation', 'iVXCSc 3s linear infinite');
        expect(tree).toHaveStyleRule('width', '220px', {
            media: '(min-width: 768px)'
        });
    });

    it('test <LogoLink /> style when render it', () => {
        const { container } = render(<LogoLink />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '80px');
        expect(tree).toHaveStyleRule('margin', '0 10px');
        expect(tree).toHaveStyleRule('position', 'relative');
        expect(tree).toHaveStyleRule('content', '\'\'', {
            modifier: ':before'
        });
        expect(tree).toHaveStyleRule('width', '1rem', {
            modifier: ':before'
        });
        expect(tree).toHaveStyleRule('height', '1rem', {
            modifier: ':before'
        });
        expect(tree).toHaveStyleRule('background-color', '#62DAFB', {
            modifier: ':before'
        });
        expect(tree).toHaveStyleRule('border-radius', '50%', {
            modifier: ':before'
        });
        expect(tree).toHaveStyleRule('position', 'absolute', {
            modifier: ':before'
        });
        expect(tree).toHaveStyleRule('left', '0', {
            modifier: ':before'
        });
        expect(tree).toHaveStyleRule('top', 'calc(50% - 0.5rem)', {
            modifier: ':before'
        });
        expect(tree).toHaveStyleRule('transition', 'all 1s ease-in-out', {
            modifier: ':before'
        });
        expect(tree).toHaveStyleRule('animation', 'KoXpa 1.7s infinite', {
            modifier: ':before'
        });

        expect(tree).toHaveStyleRule('width', '2rem', {
            media: '(min-width: 480px)',
            modifier: ':before'
        });
        expect(tree).toHaveStyleRule('height', '2rem', {
            media: '(min-width: 480px)',
            modifier: ':before'
        });
        expect(tree).toHaveStyleRule('top', 'calc(50% - 1rem)', {
            media: '(min-width: 480px)',
            modifier: ':before'
        });
    });
});
