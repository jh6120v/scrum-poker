import styled from 'styled-components';
import { FlipCard, FlipCardFront, FlipCardBack } from './flip-card';
import { respondTo } from '../../../styles/_mixin';
import logo from '../../../assets/images/bugcat-logo-bg.png';
import logo2 from '../../../assets/images/bugcat-logo-text-bg.png';
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

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  min-height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  margin:0 auto;
  padding: constant(safe-area-inset-top) constant(safe-area-inset-right) constant(safe-area-inset-bottom) constant(safe-area-inset-left);
`;

const Header = styled.header`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  text-shadow: 1px 1px 2px rgba(29, 29, 31, .7);
  overflow: hidden;
  background-color: #aadff0;
  font-family: 'Mansalva', cursive;
  //border-bottom: 0.5px dashed #fff;
  z-index: 3;
`;

const Container = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: 65px 20px 40px 20px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 40px;
  overflow: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  text-align: center;
  padding: 10px 0;
  background-color: #aadff0;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(29, 29, 31, .7);
  font-size: 14px;
  z-index: 3;
`;

// flip
const PokerContainer = styled(FlipCard)`
  height: calc(100vh - 145px);
  ${respondTo.xs`
    width: 350px;
    margin: 0 auto;
  `}
`;

const PokerListWrap = styled(FlipCardFront)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-evenly;
  background: #aadff0;
`;

const PokerSelectWrap = styled(FlipCardBack)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #aadff0;
  ${(props) => (props.active ? 'overflow: hidden;' : '')}
`;

// item auto scale. real poker radio
const PokerItemWrap = styled.div`
  display: flex;
  width: 100px;
  max-width: 22%;
  &::after {
    content: "";
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
  background: #fff;
  cursor: pointer;
  overflow: hidden;
`;

const PokerItemInner = styled.div`
  width: 90%;
  height: 94%;
  border-radius: 20%;
  color: #fff;
  background-color: #5bb1d4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 2px rgba(29, 29, 31, .7);
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const PokerSelectContainer = styled(FlipCard)`
  display: flex;
  width: 90%;
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
  color: #5bb1d4;
  text-shadow: 1px 1px 2px rgba(29, 29, 31, .5);
  padding-top: 17%;
  background-color: #fff;
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  font-family: 'Orbitron', sans-serif;
  //box-shadow: inset 1px 1px 2px 1px rgba(0,0,0,0.15);
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

const PokerSelectedItemBack = styled(FlipCardBack)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  cursor: pointer;
  transform: rotateY(180deg);
  background-color: #fff;
`;

const PokerSelectedItemBackInner = styled(PokerItemInner)`
  background-image: url(${logo2});
  background-size: contain;
`;

const BackButton = styled.div`
  position: fixed;
  left: 15px;
  top: 18px;
  z-index: 3;
  color: #fff;
  font-size: 1.2rem;
  font-family: 'Mansalva', cursive;
  text-shadow: 1px 1px 2px rgba(29, 29, 31, .7);
  cursor: pointer;
`;

export {
    Wrapper, Header, Container, Footer,
    PokerContainer, PokerListWrap, PokerSelectWrap,
    PokerItemWrap, PokerItem, PokerItemInner,
    BackButton,
    PokerSelectContainer, PokerSelectedItemFront, PokerSelectedItemBack, PokerSelectedItemBackInner
};