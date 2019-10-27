import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerWrap, BallScaleMultiple, BallScaleMultipleInner } from '../styles/common-style';

const Spinner = (props) => {
    const { show } = props;

    return (
        <SpinnerWrap show={show}>
            <BallScaleMultiple>
                <BallScaleMultipleInner />
                <BallScaleMultipleInner />
                <BallScaleMultipleInner />
            </BallScaleMultiple>
        </SpinnerWrap>
    );
};


Spinner.propTypes = {
    show: PropTypes.bool.isRequired
};

export default Spinner;
