import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { headerTitleSet, prevLinkActGoBack } from '../../../modules/header';

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
            setting
        </>
    );
};

export default Setting;