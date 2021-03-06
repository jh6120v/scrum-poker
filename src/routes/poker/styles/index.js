import styled, { css } from 'styled-components';
import { FlipCard, FlipCardFront, FlipCardBack } from './flip-card';
import { respondTo } from '../../../styles/_mixin';
import logo from '../../../assets/images/capoo-cat-logo.png';
import logoBg from '../../../assets/images/capoo-cat-logo-bg.png';
import cardBg1 from '../../../assets/images/card-bg/card-1.gif';
import cardBg2 from '../../../assets/images/card-bg/card-2.gif';
import cardBg3 from '../../../assets/images/card-bg/card-3.gif';
import cardBg4 from '../../../assets/images/card-bg/card-4.gif';
import cardBg5 from '../../../assets/images/card-bg/card-5.gif';
import cardBg6 from '../../../assets/images/card-bg/card-6.gif';
import cardBg7 from '../../../assets/images/card-bg/card-7.gif';
import cardBg8 from '../../../assets/images/card-bg/card-8.gif';
import cardBg9 from '../../../assets/images/card-bg/card-9.gif';
import cardBg10 from '../../../assets/images/card-bg/card-10.gif';
import cardBg11 from '../../../assets/images/card-bg/card-11.gif';
import cardBg12 from '../../../assets/images/card-bg/card-12.gif';
import cardBg13 from '../../../assets/images/card-bg/card-13.gif';
import coffeeCat from '../../../assets/images/coffee-cat.png';

// Poker Wrapper
const PokerWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #aadff0;
  padding-top: 44px;
`;

// flip
const PokerContainer = styled(FlipCard)`
  ${respondTo.sm`
    width: 350px;
    margin: 0 auto;
  `}
`;

const PokerListWrap = styled(FlipCardFront)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  z-index: 1;
  padding: 0 20px;
`;

const PokerSelectWrap = styled(FlipCardBack)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 0 20px;
`;

// item auto scale. real poker radio
const PokerItemWrap = styled.div`
  display: flex;
  width: 100px;
  max-width: 22%;
  margin: 6.5px 0;
  &::after {
    content: '';
    display: block;
    padding-bottom: 140%; // 高度
  }
`;

const PokerItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  border-radius: 10px;
  background-color: ${(props) => (props.borderColor ? props.borderColor : '#ffffff')};
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

const PokerItemMask = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: all 200ms linear;
  z-index: 0;
  ${(props) => {
        if (props.active) {
            return css`
              background: rgba(0,0,0,1);
            `;
        }
        return css`
          background: rgba(0,0,0,0);
        `;
    }};
`;

const PokerItemInner = styled.div`
  width: 90%;
  height: 94%;
  border-radius: 10px;
  color: ${(props) => (props.fontColor ? props.fontColor : '#ffffff')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#5bb1d4')};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-image: url(${logoBg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 0 5px 5px 0;
  font-size: 1.5rem;
`;

const PokerSelectSafari = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 25px;
`;

const PokerSelectMask = styled(PokerItemMask)`
  z-index: 2;
  border-radius: 25px;
`;

const PokerSelectContainer = styled(FlipCard)`
  display: flex;
  width: 100%;
  height: auto;
  &:after {
     content: "";
     display: block;
     padding-bottom: 154%; // 高度
   }
`;

const PokerSelectedItemFront = styled(FlipCardFront)`
  display: flex;
  justify-content: center;
  border-radius: 25px;
  cursor: pointer;
  font-size: 5rem;
  color: ${(props) => (props.fontColor ? props.fontColor : '#5AC9E8')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#ffffff')};
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  z-index: 1;
  &.img-1 {
    background-image: url(${cardBg1});
  }
  &.img-2 {
    background-image: url(${cardBg2});
  }
  &.img-3 {
    background-image: url(${cardBg3});
  }
  &.img-4 {
    background-image: url(${cardBg4});
  }
  &.img-5 {
    background-image: url(${cardBg5});
  }
  &.img-6 {
    background-image: url(${cardBg6});
  }
  &.img-7 {
    background-image: url(${cardBg7});
  }
  &.img-8 {
    background-image: url(${cardBg8});
  }
  &.img-9 {
    background-image: url(${cardBg9});
  }
  &.img-10 {
    background-image: url(${cardBg10});
  }
  &.img-11 {
    background-image: url(${cardBg11});
  }
  &.img-12 {
    background-image: url(${cardBg12});
  }
  &.img-13 {
    background-image: url(${cardBg13});
  }
`;

const PokerSelectedItemFrontWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 17%;
`;

const PokerSelectedItemFrontMask = styled(PokerItemMask)`
  z-index: 0;
  border-radius: 25px;
`;

const PokerSelectedItemBack = styled(FlipCardBack)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  transform: rotateY(180deg);
  background-color: ${(props) => (props.borderColor ? props.borderColor : '#ffffff')};
  z-index: 1;
`;

const PokerSelectedItemBackWrap = styled(PokerSelectedItemFrontWrap)`
  align-items: center;
  padding-top: 0;
`;

const PokerSelectedItemBackMask = styled(PokerItemMask)`
  z-index: 2;
  border-radius: 25px;
`;

const PokerSelectedItemBackInner = styled(PokerItemInner)`
  background-repeat: no-repeat;
  background-image: url(${logo});
  background-size: contain;
  background-position: center 40%;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  padding: 45% 0 0 0;
`;

const CloseButton = styled.div`
  z-index: 3;
  color: #fff;
  font-size: 25px;
  font-family: 'Orbitron', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in;
  padding-left: 3px;
`;

const Setting = styled.div`
  z-index: 3;
  transition: all 0.2s ease-in;
  padding-right: 3px;
  a {
    color: #fff;
    font-size: 1.2rem;
    font-family: 'Orbitron', sans-serif;
    cursor: pointer;
  }
`;

const CoffeeCat = styled.div`
  width: ${(props) => (props.width ? props.width : '30%')};
  height: ${(props) => (props.height ? props.height : '20%')};
  background-image: url(${coffeeCat});
  background-repeat: no-repeat;
  background-size: contain;
`;

export {
    PokerWrap,
    PokerContainer, PokerListWrap, PokerSelectWrap,
    PokerItemWrap, PokerItemMask, PokerItem, PokerItemInner,
    CloseButton, Setting,
    PokerSelectSafari, PokerSelectMask, PokerSelectContainer,
    PokerSelectedItemFront, PokerSelectedItemFrontWrap, PokerSelectedItemFrontMask,
    PokerSelectedItemBack, PokerSelectedItemBackWrap, PokerSelectedItemBackMask, PokerSelectedItemBackInner,
    CoffeeCat
};
