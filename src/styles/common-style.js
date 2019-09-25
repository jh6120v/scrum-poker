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

const LazyLoadWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BallScaleMultiple = styled.div`
  position: relative;
  transform: translateY(-30px);
  > div {
    background-color: #fff;
    border-radius: 100%;
    animation-fill-mode: both;
    position: absolute;
    left: -30px;
    top: 0px;
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
  }
`;

export {
    LazyLoadWrap,
    BallScaleMultiple
};