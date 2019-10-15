import React, { useCallback, useEffect, useState } from 'react';
import { TwitterPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingWrap } from '../../../styles';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import {
    ColorPicker,
    ColorWatch,
    ColorWatchShow,
    ThemePreview, ThemePreviewCardBack, ThemePreviewCardBackInner,
    ThemePreviewCardFront, ThemePreviewCardFrontInner,
    ThemePreviewCardListItem,
    ThemePreviewCardListItemInner
} from '../styles';
import { personalNumberColorChange } from '../../../../../modules/personal-setting';

const Theme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.personal.theme);
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [displayColorPicker2, setDisplayColorPicker2] = useState(false);
    const colorSelectList = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#5AC9E8', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#FFFFFF'];

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Theme'
        }));

        dispatch(prevLinkActGoBack());
    }, [dispatch]);

    const toggle = useCallback(() => setDisplayColorPicker((prev) => !prev), []);
    const toggle2 = useCallback(() => setDisplayColorPicker2((prev) => !prev), []);

    const onChange = useCallback((color, type) => {
        dispatch(personalNumberColorChange({
            [type]: color.hex
        }));
    }, [dispatch]);

    return (
        <SettingWrap>
            <SettingItem isTitle>CARD LIST</SettingItem>
            <SettingItem>
                <ThemePreview>
                    <ThemePreviewCardListItem borderColor={theme.cardList.borderColor}>
                        <ThemePreviewCardListItemInner
                            fontColor={theme.cardList.fontColor}
                            bgColor={theme.cardList.bgColor}
                        >
99
                        </ThemePreviewCardListItemInner>
                    </ThemePreviewCardListItem>
                </ThemePreview>
            </SettingItem>
            <SettingItem isTitle>CARD FRONT</SettingItem>
            <SettingItem>
                <ThemePreview>
                    <ThemePreviewCardFront fontColor={theme.cardFront.fontColor} bgColor={theme.cardFront.bgColor}>
                        <ThemePreviewCardFrontInner>99</ThemePreviewCardFrontInner>
                    </ThemePreviewCardFront>
                </ThemePreview>
            </SettingItem>
            <SettingItem isTitle>CARD BACK</SettingItem>
            <SettingItem>
                <ThemePreview>
                    <ThemePreviewCardBack borderColor={theme.cardBack.borderColor}>
                        <ThemePreviewCardBackInner bgColor={theme.cardBack.bgColor} />
                    </ThemePreviewCardBack>
                </ThemePreview>
            </SettingItem>
        </SettingWrap>
    );
};

export default Theme;
