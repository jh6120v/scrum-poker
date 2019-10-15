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

    const itemIsSelect = useCallback((index, name) => {
        if (itemSelected === null && index === 0) {
            setItemSelected(name);
            return true;
        }

        return itemSelected === name;
    }, [itemSelected]);

    return (
        <SettingWrap>
            <SettingItem isTitle>Choose one item</SettingItem>
            <SettingItem justifyContentSpaceAround>
                <ThemePreview selected={selected === 'cardList'}>
                    <ThemePreviewCardListItem borderColor={theme.cardList.borderColor}>
                        <ThemePreviewCardListItemInner
                            bgColor={theme.cardList.bgColor}
                            fontColor={theme.cardList.fontColor}
                        >
                            99
                        </ThemePreviewCardListItemInner>
                    </ThemePreviewCardListItem>
                </ThemePreview>
                <ThemePreview selected={selected === 'cardFront'}>
                    <ThemePreviewCardFront
                        bgColor={theme.cardFront.bgColor}
                        fontColor={theme.cardFront.fontColor}
                    >
                        <ThemePreviewCardFrontInner>99</ThemePreviewCardFrontInner>
                    </ThemePreviewCardFront>
                </ThemePreview>
                <ThemePreview selected={selected === 'cardBack'}>
                    <ThemePreviewCardBack borderColor={theme.cardBack.borderColor}>
                        <ThemePreviewCardBackInner bgColor={theme.cardBack.bgColor} />
                    </ThemePreviewCardBack>
                </ThemePreview>
                <ThemeSetting>
                    <ThemeSettingList>
                        {
                            Object.keys(theme[selected]).map((val, idx) => (
                                <ThemeSettingItem
                                    key={val}
                                    color={theme[selected][val]}
                                    data-title={val}
                                    selected={itemIsSelect(idx, val)}
                                />
                            ))
                        }
                    </ThemeSettingList>
                    <ThemeSettingPicker>
                        <TwitterPicker
                            triangle="hide"
                            colors={colorSelectList}
                            color={theme[selected][itemSelected]}
                            onChangeComplete={(color) => onChange(color, selected)}
                        />
                    </ThemeSettingPicker>
                </ThemeSetting>
            </SettingItem>
        </SettingWrap>
    );
};

export default Theme;
