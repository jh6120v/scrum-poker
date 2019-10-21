import React from 'react';
import PropTypes from 'prop-types';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import MdClose from 'react-ionicons/lib/MdClose';
import { Link } from 'react-router-dom';
import IosSettings from 'react-ionicons/lib/IosSettings';
import { FUNC_CLOSE, FUNC_GO_BACK, FUNC_SETTING } from '../constants';
import { history } from '../store';
import { CloseButton, Setting } from '../routes/poker/styles';
import {
    HeaderStyle, NextLink, PrevLink, Title
} from '../styles/layout-style';

const Header = ({ title, prev, next }) => {
    const renderPrev = (prevState) => {
        switch (prevState) {
            case FUNC_GO_BACK:
                return (
                    <a onClick={() => history.goBack()}>
                        <IosArrowBack fontSize="25px" color="#fff" />
                    </a>
                );
            case FUNC_CLOSE:
                return (
                    <CloseButton>
                        <MdClose fontSize="25px" color="#fff" />
                    </CloseButton>
                );
            default:
                return null;
        }
    };

    const renderNext = (nextState) => {
        if (nextState === FUNC_SETTING) {
            return (
                <Setting>
                    <Link to="/setting">
                        <IosSettings fontSize="25px" color="#fff" />
                    </Link>
                </Setting>
            );
        }

        return null;
    };

    return (
        <HeaderStyle data-testid="display_header">
            <PrevLink data-testid="display_prev_link">{renderPrev(prev)}</PrevLink>
            <Title data-testid="display_title">{title}</Title>
            <NextLink data-testid="display_next_link">{renderNext(next)}</NextLink>
        </HeaderStyle>
    );
};

Header.propsTypes = {
    title: PropTypes.string,
    prev: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    next: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default Header;
