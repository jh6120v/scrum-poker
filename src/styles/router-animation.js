import styled, { keyframes } from 'styled-components';
import { respondTo } from './_mixin';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideFromRightForwardIn = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;


const slideFromRightBackOut = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;

const slideFromBottomForwardIn = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideFromBottomBackOut = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;


const RouterAnimation = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom));
  ${respondTo.xs`
    width: 400px;
  `}
  .page-fade-in {
    &-enter {
      animation: ${fadeIn} .3s;
    }
    &-enter, &-enter-done {
      z-index: 2;
    }
    &-exit {
      z-index: 1;
    }
  }
  .page-fade-out {
    &-enter, &-enter-done {
        z-index: 1;
    }
    &-exit {
        z-index: 2;
        animation: ${fadeOut} .3s;
    }
  }
  .page-right-forward {
    &-enter {
        animation: ${slideFromRightForwardIn} .3s forwards;
    }
    &-enter, &-enter-done {
        z-index: 2;
    }
    &-exit {
        z-index: 1;
    }
  }
  .page-right-back {
    &-enter, &-enter-done {
        z-index: 1;
    }
    &-exit {
        z-index: 2;
        animation: ${slideFromRightBackOut} .3s forwards;
    }
  }
  .page-bottom-forward {
    &-enter {
        animation: ${slideFromBottomForwardIn} .3s forwards;
    }
    &-enter, &-enter-done {
        z-index: 2;
    }
    &-exit {
        z-index: 1;
    }
  }
  .page-bottom-back {
    &-enter, &-enter-done {
        z-index: 1;
    }
    &-exit {
        z-index: 2;
        animation: ${slideFromBottomBackOut} .3s forwards;
    }
  }
`;

const RouteAnimateContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 5px 0 5px -5px rgba(0,0,0,0.15), -5px 0 5px -5px rgba(0,0,0,0.15);
  overflow: auto;
`;

export {
    RouterAnimation,
    RouteAnimateContent
};
