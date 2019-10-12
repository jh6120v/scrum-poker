import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { headerTitleSet, prevLinkActGoBack } from '../../../modules/header';
import { SettingWrap, SettingItem, Version } from '../styles';

const Setting = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Setting'
        }));
        dispatch(prevLinkActGoBack());
    }, [dispatch]);

    return (
        <>
            <SettingWrap>
                <SettingItem isTitle>CARD SETTINGS</SettingItem>
                <SettingItem>
                    Sequence Type
                    <IosArrowForward color="#4f6571" />
                </SettingItem>
                <SettingItem>
                    Number Color
                    <IosArrowForward color="#4f6571" />
                </SettingItem>
                <SettingItem isTitle>GENERAL SETTINGS</SettingItem>
                <SettingItem>
                    Keep Screen on
                    <MdCheckmark color="#4f6571" />
                </SettingItem>
                <SettingItem>
                    Auto-hide Card
                    <MdCheckmark color="#4f6571" />
                </SettingItem>
                <SettingItem isSpace />
                <SettingItem>Reset</SettingItem>
                <SettingItem>Share</SettingItem>
                <SettingItem>
                    About
                    <IosArrowForward color="#4f6571" />
                </SettingItem>
                <Version>Version 0.2.0</Version>
            </SettingWrap>
        </>
    );
};

export default Setting;
