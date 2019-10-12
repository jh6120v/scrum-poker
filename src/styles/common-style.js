import styled, { keyframes } from 'styled-components';

const ballScaleMultipleAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0; 
  }
  5% {
    opacity: 1; 
  }
  100% {
    transform: scale(1);
    opacity: 0; 
  }
`;

const SpinnerWrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: fixed;
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: all .5s ease-in-out;
  z-index: 999;
`;

const BallScaleMultiple = styled.div`
  position: relative;
  transform: translateY(-30px);
`;

const BallScaleMultipleInner = styled.div`
  background-color: #fff;
  border-radius: 100%;
  animation-fill-mode: both;
  position: absolute;
  left: -30px;
  top: 0;
  opacity: 0;
  margin: 0;
  width: 60px;
  height: 60px;
  animation: ${ballScaleMultipleAnimation} 1s 0s linear infinite;
  &:nth-child(2) {
    animation-delay: -0.4s;
  }
  &:nth-child(3) {
    animation-delay: -0.2s;
  }
`;

const LazyLoad = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  background-color: #aadff0;
`;

export {
    SpinnerWrap,
    BallScaleMultiple,
    BallScaleMultipleInner,
    LazyLoad
};
