import React, { useCallback, useEffect, useState } from 'react';
import { TwitterPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingWrap } from '../../../styles';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import {
    ThemePreview, ThemePreviewCardBack, ThemePreviewCardBackInner,
    ThemePreviewCardFront, ThemePreviewCardFrontInner,
    ThemePreviewCardListItem,
    ThemePreviewCardListItemInner, ThemeSetting, ThemeSettingItem, ThemeSettingList, ThemeSettingPicker
} from '../styles';
import { personalNumberColorChange } from '../../../../../modules/personal-setting';

const Theme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.personal.theme);
    const [selected, setSelected] = useState('cardList');
    const [itemSelected, setItemSelected] = useState(null);
    const colorSelectList = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#5AC9E8', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#FFFFFF'];
    const wordTransferMap = { borderColor: 'Border', bgColor: 'Background', fontColor: 'Text' };

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Theme'
        }));

        dispatch(prevLinkActGoBack());
    }, [dispatch]);

    const selectTheme = useCallback((type) => {
        setSelected(type);
        setItemSelected(null);
    }, []);

    const itemIsSelect = useCallback((index, type) => {
        if (itemSelected === null && index === 0) {
            setItemSelected(type);
            return true;
        }

        return itemSelected === type;
    }, [itemSelected]);

    const selectThemeItem = useCallback((type) => {
        setItemSelected(type);
    }, []);

    const onChangeComplete = useCallback((color, type, item) => {
        dispatch(personalNumberColorChange({
            type,
            change: {
                [item]: color.hex
            }
        }));
    }, [dispatch]);

    return (
        <SettingWrap>
            <SettingItem isTitle>SELECT & CHANGE</SettingItem>
            <SettingItem justifyContentSpaceAround noActive>
                <ThemePreview selected={selected === 'cardList'} onClick={() => selectTheme('cardList')}>
                    <ThemePreviewCardListItem borderColor={theme.cardList.borderColor}>
                        <ThemePreviewCardListItemInner
                            bgColor={theme.cardList.bgColor}
                            fontColor={theme.cardList.fontColor}
                        >
                            99
                        </ThemePreviewCardListItemInner>
                    </ThemePreviewCardListItem>
                </ThemePreview>
                <ThemePreview selected={selected === 'cardFront'} onClick={() => selectTheme('cardFront')}>
                    <ThemePreviewCardFront
                        bgColor={theme.cardFront.bgColor}
                        fontColor={theme.cardFront.fontColor}
                    >
                        <ThemePreviewCardFrontInner>99</ThemePreviewCardFrontInner>
                    </ThemePreviewCardFront>
                </ThemePreview>
                <ThemePreview selected={selected === 'cardBack'} onClick={() => selectTheme('cardBack')}>
                    <ThemePreviewCardBack borderColor={theme.cardBack.borderColor}>
                        <ThemePreviewCardBackInner
                            bgColor={theme.cardBack.bgColor}
                            fontColor={theme.cardBack.fontColor}
                        >
                            Poker
                        </ThemePreviewCardBackInner>
                    </ThemePreviewCardBack>
                </ThemePreview>
                <ThemeSetting>
                    <ThemeSettingList>
                        {
                            Object.keys(theme[selected]).sort().map((val, idx) => (
                                <ThemeSettingItem
                                    key={val}
                                    data-title={wordTransferMap[val]}
                                    selected={itemIsSelect(idx, val)}
                                    onClick={() => selectThemeItem(val)}
                                />
                            ))
                        }
                    </ThemeSettingList>
                    <ThemeSettingPicker>
                        <TwitterPicker
                            width="100%"
                            triangle="hide"
                            colors={colorSelectList}
                            color={theme[selected][itemSelected]}
                            onChangeComplete={(color) => onChangeComplete(color, selected, itemSelected)}
                        />
                    </ThemeSettingPicker>
                </ThemeSetting>
            </SettingItem>
        </SettingWrap>
    );
};

export default Theme;
