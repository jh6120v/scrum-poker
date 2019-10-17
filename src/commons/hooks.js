import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { modelHide, modelShow } from '../modules/model';

const useModel = () => {
    const dispatch = useDispatch();
    const [isShown, setShown] = useState(false);
    const showModal = useCallback(() => setShown(true), []);
    const hideModal = useCallback(() => setShown(false), []);

    useEffect(() => {
        if (isShown) {
            dispatch(modelShow());
        } else {
            dispatch(modelHide());
        }
    }, [dispatch, isShown]);

    return {
        showModal,
        hideModal
    };
};

export {
    useModel
};
