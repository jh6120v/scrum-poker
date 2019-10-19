import React from 'react';
import ReactDOM from 'react-dom';

const Model = (props) => (props.isShow ? ReactDOM.createPortal(
    <>
        {props.children}
    </>,
    document.getElementById('model')
) : null);

export default Model;
