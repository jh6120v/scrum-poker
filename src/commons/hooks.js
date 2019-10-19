import React, { useState, useCallback } from 'react';
import {
    ConfirmButton, ModelContent, ModelFooter, ModelShadow, ModelWrap
} from '../styles/model-style';

const useModel = (message, confirm) => {
    const [isShown, setShown] = useState(false);
    const showModal = useCallback(() => setShown(true), []);
    const hideModal = useCallback(() => setShown(false), []);

    const ModelBox = () => (
        <div>
            <ModelWrap>
                <ModelContent>{message}</ModelContent>
                <ModelFooter>
                    <ConfirmButton onClick={confirm}>Confirm</ConfirmButton>
                </ModelFooter>
            </ModelWrap>
            <ModelShadow onClick={hideModal} />
        </div>
    );

    return {
        ModelBox,
        isShown,
        showModal,
        hideModal
    };
};

export {
    useModel
};
