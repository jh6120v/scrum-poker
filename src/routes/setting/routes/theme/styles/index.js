import styled from 'styled-components';
import {
    PokerItem,
    PokerItemInner,
    PokerItemWrap,
    PokerSelectedItemFront,
    PokerSelectedItemFrontWrap
} from '../../../../poker/styles';
import cardBg1 from '../../../../../assets/images/card-bg/card-1.gif';
import logo2 from '../../../../../assets/images/bugcat-logo-text-bg.png';


const ThemePreview = styled(PokerItemWrap)``;

const ThemePreviewCardListItem = styled(PokerItem)``;
const ThemePreviewCardListItemInner = styled(PokerItemInner)``;

const ThemePreviewCardFront = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  color: ${(props) => (props.fontColor ? props.fontColor : '#5AC9E8')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#ffffff')};
  background-image: url(${cardBg1});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
`;

const ThemePreviewCardFrontInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 17%;
  font-size: 1.2rem;
`;

const ThemePreviewCardBack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => (props.borderColor ? props.borderColor : '#ffffff')};
`;

const ThemePreviewCardBackInner = styled.div`
  width: 90%;
  height: 94%;
  border-radius: 10px;
  color: ${(props) => (props.fontColor ? props.fontColor : '#ffffff')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#5bb1d4')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${logo2});
  background-size: contain;
`;

const ColorWatch = styled.div`
  padding: 3px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1);
  display: inline-block;
  cursor: pointer;
  position: relative;
`;

const ColorWatchShow = styled.div`
  width: 30px;
  height: 15px;
  border-radius: 2px;
  background-color: ${(props) => (props.color ? props.color : '#FFF')};
`;

const ColorPicker = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export {
    ThemePreview,
    ThemePreviewCardListItem,
    ThemePreviewCardListItemInner,
    ThemePreviewCardFront,
    ThemePreviewCardFrontInner,
    ThemePreviewCardBack,
    ThemePreviewCardBackInner,
    ColorWatch,
    ColorWatchShow,
    ColorPicker
};
