import React, { useCallback, useEffect, useState } from 'react';
import { TwitterPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { SettingItem, SettingWrap } from '../../../styles';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import { ColorPicker, ColorWatch, ColorWatchShow } from '../styles';
import { personalNumberColorChange } from '../../../../../modules/personal-setting';

const NumberColor = () => {
    const dispatch = useDispatch();
    const personal = useSelector((state) => state.personal);
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [displayColorPicker2, setDisplayColorPicker2] = useState(false);
    const colorSelectList = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#5AC9E8', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#FFFFFF'];

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Number Color'
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
            <SettingItem>
                Poker Number
                <ColorWatch onClick={toggle}>
                    <ColorWatchShow color={personal.pokerNumberColor} />
                </ColorWatch>
                {
                    displayColorPicker ? (
                        <ColorPicker>
                            <TwitterPicker
                                triangle="top-right"
                                colors={colorSelectList}
                                color={personal.pokerNumberColor}
                                onChange={(color) => onChange(color, 'pokerNumberColor')}
                                onChangeComplete={toggle}
                            />
                        </ColorPicker>
                    ) : null
                }
            </SettingItem>
            <SettingItem>
                Selected Number
                <ColorWatch onClick={toggle2}>
                    <ColorWatchShow color={personal.selectedNumberColor} />
                </ColorWatch>
                {
                    displayColorPicker2 ? (
                        <ColorPicker>
                            <TwitterPicker
                                triangle="top-right"
                                colors={colorSelectList}
                                color={personal.selectedNumberColor}
                                onChange={(color) => onChange(color, 'selectedNumberColor')}
                                onChangeComplete={toggle2}
                            />
                        </ColorPicker>
                    ) : null
                }
            </SettingItem>
        </SettingWrap>
    );
};

export default NumberColor;