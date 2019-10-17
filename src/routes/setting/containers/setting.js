import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { history } from '../../../store';
import { headerTitleSet, prevLinkActGoBack } from '../../../modules/header';
import { SettingWrap, SettingItem, Version } from '../styles';
import {
    personalAutoHideCardChange,
    personalKeepScreenOnChange,
    personalSettingReset
} from '../../../modules/personal-setting';
import { useModel } from '../../../commons/hooks';
import {
    ConfirmButton, ModelContent, ModelFooter, ModelShadow, ModelWrap
} from '../../../styles/dialog-style';
import Model from '../../../containers/model';

const Setting = () => {
    const dispatch = useDispatch();
    const personal = useSelector((state) => state.personal);
    const { isShow } = useSelector((state) => state.model);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Setting'
        }));

        dispatch(prevLinkActGoBack());
    }, [dispatch]);

    const linkTo = useCallback((url) => history.push(url), []);
    const keepScreenOn = useCallback(() => dispatch(personalKeepScreenOnChange()), [dispatch]);
    const hideCard = useCallback(() => dispatch(personalAutoHideCardChange()), [dispatch]);

    const share = useCallback(() => {
        if (navigator.share) {
            navigator.share({
                title: 'Scrum Poker',
                text: 'Capoo Cat Scrum Poker',
                url: 'https://scrum-poker.dailyofjames.com',
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        }
    }, []);

    const { showModal, hideModal } = useModel();
    const onConfirm = useCallback(() => {
        hideModal();
        dispatch(personalSettingReset());
    }, [dispatch, hideModal]);

    return (
        <>
            <SettingWrap>
                <SettingItem isTitle>CARD SETTINGS</SettingItem>
                <SettingItem onClick={() => linkTo('/setting/sequence-list')}>
                    Sequence Type
                    <IosArrowForward color="#4f6571" />
                </SettingItem>
                <SettingItem onClick={() => linkTo('/setting/theme')}>
                    Theme
                    <IosArrowForward color="#4f6571" />
                </SettingItem>
                <SettingItem isTitle>GENERAL SETTINGS</SettingItem>
                <SettingItem onClick={keepScreenOn}>
                    Keep Screen on
                    {personal.keepScreenOn ? <MdCheckmark color="#4f6571" /> : null}
                </SettingItem>
                <SettingItem onClick={hideCard}>
                    Auto-hide Card
                    {personal.autoHideCard ? <MdCheckmark color="#4f6571" /> : null}
                </SettingItem>
                <SettingItem isSpace />
                <SettingItem onClick={showModal}>Reset</SettingItem>
                <SettingItem onClick={share}>Share</SettingItem>
                <SettingItem onClick={() => linkTo('/setting/about')}>
                    About
                    <IosArrowForward color="#4f6571" />
                </SettingItem>
                <Version>Version 0.2.0</Version>
            </SettingWrap>
            <Model isShow={isShow}>
                <ModelShadow onClick={hideModal} />
                <ModelWrap>
                    <ModelContent>Are you sure to reset?</ModelContent>
                    <ModelFooter>
                        <ConfirmButton onClick={onConfirm}>Confirm</ConfirmButton>
                    </ModelFooter>
                </ModelWrap>
            </Model>
        </>
    );
};

export default Setting;
