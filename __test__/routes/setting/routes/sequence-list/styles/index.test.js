import 'jest-styled-components';
import { render } from '@testing-library/react';
import React from 'react';
import { List, Name, Sequence } from '../../../../../../src/routes/setting/routes/sequence-list/styles';

describe('test sequence-list styles.', () => {
    it('test <Sequence /> snapshot.', () => {
        const { container } = render(<Sequence />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Sequence /> when render it.', () => {
        const { container } = render(<Sequence />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '70%');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'column');
    });

    it('test <Name /> when render it.', () => {
        const { container } = render(<Name />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
    });

    it('test <List /> snapshot.', () => {
        const { container } = render(<List />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <List /> when render it.', () => {
        const { container } = render(<List />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('font-size', '.7rem');
        expect(tree).toHaveStyleRule('line-height', '.8rem');
    });
});