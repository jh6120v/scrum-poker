import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import { SettingWrap } from '../../../styles';
import { AboutContent, AppName } from '../styles';

const About = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'About'
        }));

        dispatch(prevLinkActGoBack());
    }, [dispatch]);

    return (
        <SettingWrap>
            <AboutContent>
                <AppName>Capoo Cat Scrum Poker</AppName>
                This is an PWA for testing purposes only.
                <br />
                Image copyright is
                <a href="https://www.facebook.com/capoocat/" target="_new"> Capoocat </a>
                <br />
                <br />
                Author: James Yu
                <br />
                E-mail:
                <a href="mailto:jh6120v@msn.com" target="_new"> jh6120v@msn.com</a>
                <br />
                Github:
                <a href="https://github.com/jh6120v/scrum-poker" target="_new"> https://github.com/jh6120v/scrum-poker</a>
            </AboutContent>
        </SettingWrap>
    );
};

export default About;
