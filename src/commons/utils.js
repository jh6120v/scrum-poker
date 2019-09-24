import React, { Suspense } from 'react';

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
    <Suspense fallback={<div>載入中...</div>}>
        <Component />
    </Suspense>
);
