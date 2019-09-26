import React from 'react';
import * as PropTypes from 'prop-types';
import { SpinnerWrap, BallScaleMultiple } from '../styles/common-style';

const Spinner = (props) => {
    const { show } = props;

    return (
        <SpinnerWrap show={show}>
            <BallScaleMultiple>
                <div />
                <div />
                <div />
            </BallScaleMultiple>
        </SpinnerWrap>
    );
};


Spinner.propTypes = {
    show: PropTypes.bool.isRequired
};

export default Spinner;