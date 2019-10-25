import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
    CloseButton, CoffeeCat,
    PokerContainer,
    PokerItem,
    PokerItemInner,
    PokerItemMask,
    PokerItemWrap,
    PokerListWrap,
    PokerSelectContainer,
    PokerSelectedItemBack,
    PokerSelectedItemBackInner,
    PokerSelectedItemBackMask,
    PokerSelectedItemBackWrap,
    PokerSelectedItemFront,
    PokerSelectedItemFrontMask,
    PokerSelectedItemFrontWrap,
    PokerSelectMask,
    PokerSelectSafari,
    PokerSelectWrap,
    PokerWrap, Setting
} from '../../../../src/routes/poker/styles';

describe('test Poker style.', () => {
    it('test <PokerWrap /> snapshot.', () => {
        const { container } = render(<PokerWrap />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerWrap /> when render it.', () => {
        const { container } = render(<PokerWrap />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('background-color', '#aadff0');
        expect(tree).toHaveStyleRule('padding-top', '44px');
    });

    it('test <PokerContainer /> snapshot.', () => {
        const { container } = render(<PokerContainer />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerContainer /> when render it.', () => {
        const { container } = render(<PokerContainer />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '350px', {
            media: '(min-width: 768px)'
        });
        expect(tree).toHaveStyleRule('margin', '0 auto', {
            media: '(min-width: 768px)'
        });
    });

    it('test <PokerListWrap /> snapshot.', () => {
        const { container } = render(<PokerListWrap />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerListWrap /> when render it.', () => {
        const { container } = render(<PokerListWrap />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
        expect(tree).toHaveStyleRule('justify-content', 'space-between');
        expect(tree).toHaveStyleRule('align-content', 'center');
        expect(tree).toHaveStyleRule('z-index', '1');
        expect(tree).toHaveStyleRule('padding', '0 20px');
    });

    it('test <PokerSelectWrap /> snapshot.', () => {
        const { container } = render(<PokerSelectWrap />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerSelectWrap /> when render it.', () => {
        const { container } = render(<PokerSelectWrap />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('z-index', '1');
        expect(tree).toHaveStyleRule('padding', '0 20px');
    });

    it('test <PokerItemWrap /> snapshot.', () => {
        const { container } = render(<PokerItemWrap />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerItemWrap /> when render it.', () => {
        const { container } = render(<PokerItemWrap />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('width', '100px');
        expect(tree).toHaveStyleRule('max-width', '22%');
        expect(tree).toHaveStyleRule('margin', '6.5px 0');
        expect(tree).toHaveStyleRule('content', "''", {
            modifier: '::after'
        });
        expect(tree).toHaveStyleRule('display', 'block', {
            modifier: '::after'
        });
        expect(tree).toHaveStyleRule('padding-bottom', '140%', {
            modifier: '::after'
        });
    });

    it('test <PokerItem /> snapshot.', () => {
        const { container } = render(<PokerItem />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerItem /> when render with default props.', () => {
        const { container } = render(<PokerItem />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('font-size', '1.8rem');
        expect(tree).toHaveStyleRule('border-radius', '10px');
        expect(tree).toHaveStyleRule('background-color', '#ffffff');
        expect(tree).toHaveStyleRule('cursor', 'pointer');
        expect(tree).toHaveStyleRule('overflow', 'hidden');
        expect(tree).toHaveStyleRule('position', 'relative');
    });

    it('test <PokerItem /> when render with borderColor props.', () => {
        const { container } = render(<PokerItem borderColor="#000" />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('background-color', '#000');
    });

    it('test <PokerItemMask /> snapshot.', () => {
        const { container } = render(<PokerItemMask />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerItemMask /> when render with default props.', () => {
        const { container } = render(<PokerItemMask />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('position', 'absolute');
        expect(tree).toHaveStyleRule('left', '0');
        expect(tree).toHaveStyleRule('top', '0');
        expect(tree).toHaveStyleRule('right', '0');
        expect(tree).toHaveStyleRule('bottom', '0');
        expect(tree).toHaveStyleRule('transition', 'all 200ms linear');
        expect(tree).toHaveStyleRule('z-index', '0');
        expect(tree).toHaveStyleRule('background', 'rgba(0,0,0,0)');
    });

    it('test <PokerItemMask /> when render with active props.', () => {
        const { container } = render(<PokerItemMask active />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('background', 'rgba(0,0,0,1)');
    });

    it('test <PokerItemInner /> snapshot.', () => {
        const { container } = render(<PokerItemInner />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerItemInner /> when render with default props.', () => {
        const { container } = render(<PokerItemInner />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '90%');
        expect(tree).toHaveStyleRule('height', '94%');
        expect(tree).toHaveStyleRule('border-radius', '10px');
        expect(tree).toHaveStyleRule('color', '#ffffff');
        expect(tree).toHaveStyleRule('background-color', '#5bb1d4');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'flex-end');
        expect(tree).toHaveStyleRule('align-items', 'flex-end');
        expect(tree).toHaveStyleRule('background-image', 'url(capoo-cat-logo-bg.png)');
        expect(tree).toHaveStyleRule('background-repeat', 'no-repeat');
        expect(tree).toHaveStyleRule('background-position', 'center center');
        expect(tree).toHaveStyleRule('background-size', 'cover');
        expect(tree).toHaveStyleRule('padding', '0 5px 5px 0');
        expect(tree).toHaveStyleRule('font-size', '1.5rem');
    });

    it('test <PokerItemInner /> when render with another props.', () => {
        const { container } = render(<PokerItemInner fontColor="#000" bgColor="#000" />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('color', '#000');
        expect(tree).toHaveStyleRule('background-color', '#000');
    });

    it('test <PokerSelectSafari /> snapshot.', () => {
        const { container } = render(<PokerSelectSafari />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerSelectSafari /> when render it.', () => {
        const { container } = render(<PokerSelectSafari />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('overflow', 'hidden');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('position', 'relative');
        expect(tree).toHaveStyleRule('border-radius', '25px');
    });

    it('test <PokerSelectMask /> snapshot.', () => {
        const { container } = render(<PokerSelectMask />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerSelectMask /> when render it.', () => {
        const { container } = render(<PokerSelectMask />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('z-index', '2');
        expect(tree).toHaveStyleRule('border-radius', '25px');
    });

    it('test <PokerSelectContainer /> snapshot.', () => {
        const { container } = render(<PokerSelectContainer />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerSelectContainer /> when render it.', () => {
        const { container } = render(<PokerSelectContainer />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', 'auto');
        expect(tree).toHaveStyleRule('content', '""', {
            modifier: ':after'
        });
        expect(tree).toHaveStyleRule('display', 'block', {
            modifier: ':after'
        });
        expect(tree).toHaveStyleRule('padding-bottom', '154%', {
            modifier: ':after'
        });
    });

    it('test <PokerSelectedItemFront /> snapshot.', () => {
        const { container } = render(<PokerSelectedItemFront />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerSelectedItemFront /> when render with default props.', () => {
        const { container } = render(<PokerSelectedItemFront />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('border-radius', '25px');
        expect(tree).toHaveStyleRule('cursor', 'pointer');
        expect(tree).toHaveStyleRule('font-size', '5rem');
        expect(tree).toHaveStyleRule('color', '#5AC9E8');
        expect(tree).toHaveStyleRule('background-color', '#ffffff');
        expect(tree).toHaveStyleRule('background-size', 'contain');
        expect(tree).toHaveStyleRule('background-position', 'bottom');
        expect(tree).toHaveStyleRule('background-repeat', 'no-repeat');
        expect(tree).toHaveStyleRule('z-index', '1');
        expect(tree).toHaveStyleRule('background-image', 'url(card-1.gif)', {
            modifier: '&.img-1'
        });
        expect(tree).toHaveStyleRule('background-image', 'url(card-2.gif)', {
            modifier: '&.img-2'
        });
        expect(tree).toHaveStyleRule('background-image', 'url(card-3.gif)', {
            modifier: '&.img-3'
        });
        expect(tree).toHaveStyleRule('background-image', 'url(card-4.gif)', {
            modifier: '&.img-4'
        });
        expect(tree).toHaveStyleRule('background-image', 'url(card-5.gif)', {
            modifier: '&.img-5'
        });
        expect(tree).toHaveStyleRule('background-image', 'url(card-6.gif)', {
            modifier: '&.img-6'
        });
        expect(tree).toHaveStyleRule('background-image', 'url(card-7.gif)', {
            modifier: '&.img-7'
        });
        expect(tree).toHaveStyleRule('background-image', 'url(card-8.gif)', {
            modifier: '&.img-8'
        });
        expect(tree).toHaveStyleRule('background-image', 'url(card-9.gif)', {
            modifier: '&.img-9'
        });
        expect(tree).toHaveStyleRule('background-image', 'url(card-10.gif)', {
            modifier: '&.img-10'
        });
        expect(tree).toHaveStyleRule('background-image', 'url(card-11.gif)', {
            modifier: '&.img-11'
        });
        expect(tree).toHaveStyleRule('background-image', 'url(card-12.gif)', {
            modifier: '&.img-12'
        });
        expect(tree).toHaveStyleRule('background-image', 'url(card-13.gif)', {
            modifier: '&.img-13'
        });
    });

    it('test <PokerSelectedItemFront /> when render with another props.', () => {
        const { container } = render(<PokerSelectedItemFront fontColor="#000" bgColor="#000" />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('color', '#000');
        expect(tree).toHaveStyleRule('background-color', '#000');
    });

    it('test <PokerSelectedItemFrontWrap /> snapshot.', () => {
        const { container } = render(<PokerSelectedItemFrontWrap />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerSelectedItemFrontWrap /> when render it.', () => {
        const { container } = render(<PokerSelectedItemFrontWrap />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('position', 'relative');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'flex-start');
        expect(tree).toHaveStyleRule('padding-top', '17%');
    });

    it('test <PokerSelectedItemFrontMask /> snapshot.', () => {
        const { container } = render(<PokerSelectedItemFrontMask />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerSelectedItemFrontMask /> when render it.', () => {
        const { container } = render(<PokerSelectedItemFrontMask />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('z-index', '0');
        expect(tree).toHaveStyleRule('border-radius', '25px');
    });

    it('test <PokerSelectedItemBack /> snapshot.', () => {
        const { container } = render(<PokerSelectedItemBack />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerSelectedItemBack /> when render with default props.', () => {
        const { container } = render(<PokerSelectedItemBack />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('border-radius', '25px');
        expect(tree).toHaveStyleRule('cursor', 'pointer');
        expect(tree).toHaveStyleRule('transform', 'rotateY(180deg)');
        expect(tree).toHaveStyleRule('background-color', '#ffffff');
        expect(tree).toHaveStyleRule('z-index', '1');
    });

    it('test <PokerSelectedItemBack /> when render with another prpos.', () => {
        const { container } = render(<PokerSelectedItemBack borderColor="#000" />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('background-color', '#000');
    });

    it('test <PokerSelectedItemBackWrap /> snapshot.', () => {
        const { container } = render(<PokerSelectedItemBackWrap />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerSelectedItemBackWrap /> when render it.', () => {
        const { container } = render(<PokerSelectedItemBackWrap />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('padding-top', '0');
    });

    it('test <PokerSelectedItemBackMask /> snapshot.', () => {
        const { container } = render(<PokerSelectedItemBackMask />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerSelectedItemBackMask /> when render it.', () => {
        const { container } = render(<PokerSelectedItemBackMask />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('z-index', '2');
        expect(tree).toHaveStyleRule('border-radius', '25px');
    });

    it('test <PokerSelectedItemBackInner /> snapshot.', () => {
        const { container } = render(<PokerSelectedItemBackInner />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <PokerSelectedItemBackInner /> when render it.', () => {
        const { container } = render(<PokerSelectedItemBackInner />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('background-repeat', 'no-repeat');
        expect(tree).toHaveStyleRule('background-image', 'url(capoo-cat-logo.png)');
        expect(tree).toHaveStyleRule('background-size', 'contain');
        expect(tree).toHaveStyleRule('background-position', 'center 40%');
        expect(tree).toHaveStyleRule('font-size', '2rem');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('padding', '45% 0 0 0');
    });

    it('test <CloseButton /> snapshot.', () => {
        const { container } = render(<CloseButton />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <CloseButton /> when render it.', () => {
        const { container } = render(<CloseButton />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('z-index', '3');
        expect(tree).toHaveStyleRule('color', '#fff');
        expect(tree).toHaveStyleRule('font-size', '25px');
        expect(tree).toHaveStyleRule('font-family', '\'Orbitron\',sans-serif');
        expect(tree).toHaveStyleRule('cursor', 'pointer');
        expect(tree).toHaveStyleRule('transition', 'all 0.2s ease-in');
        expect(tree).toHaveStyleRule('padding-left', '3px');
    });

    it('test <Setting /> snapshot.', () => {
        const { container } = render(<Setting />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Setting /> when render it..', () => {
        const { container } = render(<Setting />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('z-index', '3');
        expect(tree).toHaveStyleRule('transition', 'all 0.2s ease-in');
        expect(tree).toHaveStyleRule('padding-right', '3px');
        expect(tree).toHaveStyleRule('color', '#fff', {
            modifier: 'a'
        });
        expect(tree).toHaveStyleRule('font-size', '1.2rem', {
            modifier: 'a'
        });
        expect(tree).toHaveStyleRule('font-family', '\'Orbitron\',sans-serif', {
            modifier: 'a'
        });
        expect(tree).toHaveStyleRule('cursor', 'pointer', {
            modifier: 'a'
        });
    });

    it('test <CoffeeCat /> snapshot.', () => {
        const { container } = render(<CoffeeCat />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <CoffeeCat /> when render with default props.', () => {
        const { container } = render(<CoffeeCat />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '30%');
        expect(tree).toHaveStyleRule('height', '20%');
        expect(tree).toHaveStyleRule('background-image', 'url(coffee-cat.png)');
        expect(tree).toHaveStyleRule('background-repeat', 'no-repeat');
        expect(tree).toHaveStyleRule('background-size', 'contain');
    });

    it('test <CoffeeCat /> when render with another props.', () => {
        const { container } = render(<CoffeeCat width="50%" height="50%" />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '50%');
        expect(tree).toHaveStyleRule('height', '50%');
    });
});
