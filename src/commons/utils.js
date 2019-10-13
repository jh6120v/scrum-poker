import React, { Suspense } from 'react';
import { LazyLoad } from '../styles/common-style';

export const personalDefaultSetting = {
    sequenceType: '',
    pokerNumberColor: '#FFFFFF',
    selectedNumberColor: '#5AC9E8',
    keepScreenOn: false,
    autoHideCard: false
};

export const createActionCreator = (namespace) => (actionType) => {
    const type = `${namespace}/${actionType}`;
    const actionCreator = (payload = {}) => ({
        type,
        payload
    });

    actionCreator.type = type;
    Object.freeze(actionCreator);

    return actionCreator;
};

export const waitingRouteComponent = (Component) => () => (
    <Suspense fallback={<LazyLoad>Loading...</LazyLoad>}>
        <Component />
    </Suspense>
);

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
