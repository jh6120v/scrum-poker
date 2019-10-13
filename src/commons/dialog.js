import React from 'react';
import PropTypes from 'prop-types';
import {
    CancelButton, ConfirmButton, DialogContent, DialogFooter, DialogShadow, DialogWrap
} from '../styles/dialog-style';

const Dialog = ({ message, onCancel, onConfirm }) => (message ? (
    <>
        <DialogShadow />
        <DialogWrap>
            <DialogContent>{message}</DialogContent>
            <DialogFooter>
                <CancelButton onClick={onCancel}>Cancel</CancelButton>
                <ConfirmButton onClick={onConfirm}>Confirm</ConfirmButton>
            </DialogFooter>
        </DialogWrap>
    </>
) : null);

Dialog.propsTypes = {
    message: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
};

export default Dialog;