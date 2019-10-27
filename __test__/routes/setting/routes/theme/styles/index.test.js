import 'jest-styled-components';
import { render } from '@testing-library/react';
import React from 'react';
import {
    ThemePreview, ThemePreviewCardBack, ThemePreviewCardBackInner,
    ThemePreviewCardFront, ThemePreviewCardFrontInner, ThemeSetting, ThemeSettingItem, ThemeSettingList,
    ThemeSettingPicker
} from '../../../../../../src/routes/setting/routes/theme/styles';

describe('test theme styles.', () => {
    it('test <ThemePreview /> snapshot.', () => {
        const { container } = render(<ThemePreview />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ThemePreview /> when render with default props.', () => {
        const { container } = render(<ThemePreview />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('border-radius', '10px');
        expect(tree).toHaveStyleRule('transition', 'all .3s ease');
        expect(tree).toHaveStyleRule('transform', 'scale(1)');
    });

    it('test <ThemePreview /> when render with selected props.', () => {
        const { container } = render(<ThemePreview selected />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('transform', 'scale(1.1)');
    });

    it('test <ThemeSettingPicker /> snapshot.', () => {
        const { container } = render(<ThemeSettingPicker />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ThemeSettingPicker /> when render it.', () => {
        const { container } = render(<ThemeSettingPicker />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
    });

    it('test <ThemePreviewCardFront /> snapshot.', () => {
        const { container } = render(<ThemePreviewCardFront />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ThemePreviewCardFront /> when render with default props.', () => {
        const { container } = render(<ThemePreviewCardFront />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('border-radius', '10px');
        expect(tree).toHaveStyleRule('color', '#5AC9E8');
        expect(tree).toHaveStyleRule('background-color', '#ffffff');
        expect(tree).toHaveStyleRule('background-image', 'url(card-1.gif)');
        expect(tree).toHaveStyleRule('background-size', 'contain');
        expect(tree).toHaveStyleRule('background-repeat', 'no-repeat');
        expect(tree).toHaveStyleRule('background-position', 'bottom');
    });

    it('test <ThemePreviewCardFront /> when render fontColor and bgColor props.', () => {
        const { container } = render(<ThemePreviewCardFront fontColor="#000" bgColor="#000" />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('color', '#000');
        expect(tree).toHaveStyleRule('background-color', '#000');
    });

    it('test <ThemePreviewCardFrontInner /> snapshot.', () => {
        const { container } = render(<ThemePreviewCardFrontInner />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ThemePreviewCardFrontInner /> when render it.', () => {
        const { container } = render(<ThemePreviewCardFrontInner />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'flex-start');
        expect(tree).toHaveStyleRule('padding-top', '17%');
        expect(tree).toHaveStyleRule('font-size', '1.2rem');
    });

    it('test <ThemePreviewCardBack /> snapshot.', () => {
        const { container } = render(<ThemePreviewCardBack />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ThemePreviewCardBack /> when render with default props.', () => {
        const { container } = render(<ThemePreviewCardBack />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('border-radius', '10px');
        expect(tree).toHaveStyleRule('background-color', '#ffffff');
    });

    it('test <ThemePreviewCardBack /> when render with borderColor props.', () => {
        const { container } = render(<ThemePreviewCardBack borderColor="#000" />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('background-color', '#000');
    });

    it('test <ThemePreviewCardBackInner /> snapshot.', () => {
        const { container } = render(<ThemePreviewCardBackInner />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ThemePreviewCardBackInner /> when render with default props.', () => {
        const { container } = render(<ThemePreviewCardBackInner />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '90%');
        expect(tree).toHaveStyleRule('height', '94%');
        expect(tree).toHaveStyleRule('border-radius', '10px');
        expect(tree).toHaveStyleRule('color', '#ffffff');
        expect(tree).toHaveStyleRule('background-color', '#5bb1d4');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('background-repeat', 'no-repeat');
        expect(tree).toHaveStyleRule('background-position', 'center 40%');
        expect(tree).toHaveStyleRule('background-image', 'url(capoo-cat-logo.png)');
        expect(tree).toHaveStyleRule('background-size', 'contain');
        expect(tree).toHaveStyleRule('padding-top', '45%');
    });

    it('test <ThemePreviewCardBackInner /> when render with fontColor and bgColor props.', () => {
        const { container } = render(<ThemePreviewCardBackInner fontColor="#000" bgColor="#000" />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('color', '#000');
        expect(tree).toHaveStyleRule('background-color', '#000');
    });

    it('test <ThemeSetting /> snapshot.', () => {
        const { container } = render(<ThemeSetting />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ThemeSetting /> when render it.', () => {
        const { container } = render(<ThemeSetting />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('align-content', 'space-around');
        expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
        expect(tree).toHaveStyleRule('margin-top', '15px');
    });

    it('test <ThemeSettingList /> snapshot.', () => {
        const { container } = render(<ThemeSettingList />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ThemeSettingList /> when render it.', () => {
        const { container } = render(<ThemeSettingList />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('margin-bottom', '15px');
    });

    it('test <ThemeSettingItem /> snapshot.', () => {
        const { container } = render(<ThemeSettingItem />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ThemeSettingItem /> when render with default props.', () => {
        const { container } = render(<ThemeSettingItem />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('position', 'relative');
        expect(tree).toHaveStyleRule('display', 'inline-block');
        expect(tree).toHaveStyleRule('border-radius', '5px');
        expect(tree).toHaveStyleRule('padding', '2px 7px');
        expect(tree).toHaveStyleRule('margin-right', '10px');
        expect(tree).toHaveStyleRule('transition', 'transform .3s ease');
        expect(tree).toHaveStyleRule('background-color', '#ffffff');
        expect(tree).toHaveStyleRule('color', '#5bb1d4');
        expect(tree).toHaveStyleRule('transform', 'scale(1)');
        expect(tree).toHaveStyleRule('content', 'attr(data-title)', {
            modifier: ':before'
        });
        expect(tree).toHaveStyleRule('margin-right', '0', {
            modifier: ':last-child'
        });
    });

    it('test <ThemeSettingItem /> when render with selected props.', () => {
        const { container } = render(<ThemeSettingItem selected />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('background-color', '#5bb1d4');
        expect(tree).toHaveStyleRule('color', '#ffffff');
        expect(tree).toHaveStyleRule('transform', 'scale(1.1)');
    });
});