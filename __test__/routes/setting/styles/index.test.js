import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { SettingItem, SettingWrap, Version } from '../../../../src/routes/setting/styles';

describe('test setting style.', () => {
    it('test <SettingWrap /> snapshot.', () => {
        const { container } = render(<SettingWrap />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <SettingWrap /> when render it.', () => {
        const { container } = render(<SettingWrap />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('background-color', '#9fd4e5');
        expect(tree).toHaveStyleRule('padding-top', '44px');
    });

    it('test <SettingItem /> snapshot.', () => {
        const { container } = render(<SettingItem />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <SettingItem /> when render with default props.', () => {
        const { container } = render(<SettingItem noActive />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('border-bottom', '1px solid #6cb8cf');
        expect(tree).toHaveStyleRule('color', '#4f6571');
        expect(tree).toHaveStyleRule('line-height', '1.5rem');
        expect(tree).toHaveStyleRule('padding', '10px 15px');
        expect(tree).toHaveStyleRule('font-family', 'Arial,serif');
        expect(tree).toHaveStyleRule('font-size', '.9rem');
        expect(tree).toHaveStyleRule('text-transform', 'capitalize');
        expect(tree).toHaveStyleRule('cursor', 'pointer');
        expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
        expect(tree).toHaveStyleRule('background-color', '#aadff0');
        expect(tree).toHaveStyleRule('justify-content', 'space-between');
    });

    it('test <SettingItem /> when alignItemsCenter prop is set.', () => {
        const { container } = render(<SettingItem alignItemsCenter />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('align-items', 'center');
    });

    it('test <SettingItem /> when isTitle prop is set.', () => {
        const { container } = render(<SettingItem isTitle />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('background-color', '#9fd4e5');
        expect(tree).toHaveStyleRule('padding-top', '20px');
        expect(tree).toHaveStyleRule('padding-bottom', '5px');
        expect(tree).toHaveStyleRule('font-size', '.8rem');
        expect(tree).toHaveStyleRule('font-weight', 'bold');
    });

    it('test <SettingItem /> when isSpace prop is set.', () => {
        const { container } = render(<SettingItem isSpace />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('padding', '5px 0');
    });

    it('test <SettingItem /> when justifyContentSpaceAround prop is set.', () => {
        const { container } = render(<SettingItem justifyContentSpaceAround />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('justify-content', 'space-around');
    });

    it('test <SettingItem /> when noActive prop is set.', () => {
        const { container } = render(<SettingItem noActive={false} />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('animation', 'dOpObm .1s ease-in', {
            modifier: '&:active'
        });
        expect(tree).toHaveStyleRule('animation-iteration-count', '1', {
            modifier: '&:active'
        });
        expect(tree).toHaveStyleRule('animation-fill-mode', 'forwards', {
            modifier: '&:active'
        });
    });

    it('test <Version /> snapshot.', () => {
        const { container } = render(<Version />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Version /> when render it.', () => {
        const { container } = render(<Version />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('color', '#4f6571');
        expect(tree).toHaveStyleRule('font-family', 'Arial,serif');
        expect(tree).toHaveStyleRule('font-size', '.8rem');
        expect(tree).toHaveStyleRule('padding', '20px 0');
    });
});
