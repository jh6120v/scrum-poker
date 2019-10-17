import styled, { css } from 'styled-components';
import {
    PokerItem,
    PokerItemInner,
    PokerItemWrap
} from '../../../../poker/styles';
import cardBg1 from '../../../../../assets/images/card-bg/card-1.gif';
import logo from '../../../../../assets/images/capoo-cat-logo.png';

const ThemePreview = styled(PokerItemWrap)`
  //margin: 0;
  border-radius: 10px;
  transition: all .3s ease;
  transform: ${(props) => (props.selected ? 'scale(1.1)' : 'scale(1)')};
`;

const ThemeSettingPicker = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

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
  background-position: center 40%;
  background-image: url(${logo});
  background-size: contain;
  padding-top: 45%;
  font-size: .2rem;
`;

const ThemeSetting = styled.div`
  display: flex;
  width: 100%;
  align-content: space-around;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const ThemeSettingList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 15px;
`;

const ThemeSettingItem = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 5px;
  padding: 2px 7px;  
  margin-right: 10px;
  transition: transform .3s ease;
  ${(props) => {
        if (props.selected) {
            return css`
              background-color: #5bb1d4;
              color: #ffffff;
              //box-shadow: 0 0 3px #ffffff;
              transform: scale(1.1);
            `;
        }

        return css`
          background-color: #ffffff;
          color: #5bb1d4;
          transform: scale(1);
        `;
    }};
  &:before {
    content: attr(data-title);
  }
  &:last-child {
    margin-right: 0;
  }
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
    ThemeSetting,
    ThemeSettingList,
    ThemeSettingItem,
    ThemeSettingPicker,
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
