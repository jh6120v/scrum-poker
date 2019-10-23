import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { RouteAnimateContent, RouterAnimation } from '../../src/styles/router-animation';

describe('test router-animation style.', () => {
    it('test <RouterAnimation /> snapshot', () => {
        const { container } = render(<RouterAnimation />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <RouterAnimation /> when render it.', () => {
        const { container } = render(<RouterAnimation />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('position', 'relative');
        expect(tree).toHaveStyleRule('width', '100vw');
        expect(tree).toHaveStyleRule('height', 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))');
        expect(tree).toHaveStyleRule('width', '400px', {
            media: '(min-width: 480px)'
        });
        expect(tree).toHaveStyleRule('animation', 'eMLfYp .3s', {
            modifier: '.page-fade-in-enter'
        });
        expect(tree).toHaveStyleRule('z-index', '2', {
            modifier: '.page-fade-in-enter'
        });
        expect(tree).toHaveStyleRule('z-index', '2', {
            modifier: '.page-fade-in-enter-done'
        });
        expect(tree).toHaveStyleRule('z-index', '1', {
            modifier: '.page-fade-in-exit'
        });
        expect(tree).toHaveStyleRule('z-index', '1', {
            modifier: '.page-fade-out-enter'
        });
        expect(tree).toHaveStyleRule('z-index', '1', {
            modifier: '.page-fade-out-enter-done'
        });
        expect(tree).toHaveStyleRule('z-index', '2', {
            modifier: '.page-fade-out-exit'
        });
        expect(tree).toHaveStyleRule('animation', 'hSsjZP .3s', {
            modifier: '.page-fade-out-exit'
        });
        expect(tree).toHaveStyleRule('animation', 'hEZKxB .3s forwards', {
            modifier: '.page-right-forward-enter'
        });
        expect(tree).toHaveStyleRule('z-index', '2', {
            modifier: '.page-right-forward-enter'
        });
        expect(tree).toHaveStyleRule('z-index', '2', {
            modifier: '.page-right-forward-enter-done'
        });
        expect(tree).toHaveStyleRule('z-index', '1', {
            modifier: '.page-right-forward-exit'
        });
        expect(tree).toHaveStyleRule('z-index', '1', {
            modifier: '.page-right-back-enter'
        });
        expect(tree).toHaveStyleRule('z-index', '1', {
            modifier: '.page-right-back-enter-done'
        });
        expect(tree).toHaveStyleRule('z-index', '2', {
            modifier: '.page-right-back-exit'
        });
        expect(tree).toHaveStyleRule('animation', 'jPoDAE .3s forwards', {
            modifier: '.page-right-back-exit'
        });
        expect(tree).toHaveStyleRule('animation', 'bqfpha .3s forwards', {
            modifier: '.page-bottom-forward-enter'
        });
        expect(tree).toHaveStyleRule('z-index', '2', {
            modifier: '.page-bottom-forward-enter'
        });
        expect(tree).toHaveStyleRule('z-index', '2', {
            modifier: '.page-bottom-forward-enter-done'
        });
        expect(tree).toHaveStyleRule('z-index', '1', {
            modifier: '.page-bottom-forward-exit'
        });
        expect(tree).toHaveStyleRule('z-index', '1', {
            modifier: '.page-bottom-back-enter'
        });
        expect(tree).toHaveStyleRule('z-index', '1', {
            modifier: '.page-bottom-back-enter-done'
        });
        expect(tree).toHaveStyleRule('z-index', '2', {
            modifier: '.page-bottom-back-exit'
        });
        expect(tree).toHaveStyleRule('animation', 'iDfTdY .3s forwards', {
            modifier: '.page-bottom-back-exit'
        });
    });

    it('test <RouteAnimateContent /> snapshot.', () => {
        const { container } = render(<RouteAnimateContent />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <RouteAnimateContent /> when render it.', () => {
        const { container } = render(<RouteAnimateContent />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('position', 'absolute');
        expect(tree).toHaveStyleRule('top', '0');
        expect(tree).toHaveStyleRule('left', '0');
        expect(tree).toHaveStyleRule('box-shadow', '-5px 0 2px -3px rgba(0,0,0,0.15)');
        expect(tree).toHaveStyleRule('overflow', 'auto');
    });
});