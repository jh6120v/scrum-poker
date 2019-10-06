import styled, { keyframes } from 'styled-components';

const scaleIn = keyframes`
  0% {
    transform: scale(1) rotateY(0deg);
  }
  25% {
    transform: scale(.95) rotateY(45deg); 
  }
  50% {
    transform: scale(.9) rotateY(90deg); 
  }
  75% {
    transform: scale(.95) rotateY(135deg); 
  }
  100% {
    transform: scale(1) rotateY(180deg);
    
  }
`;

const scaleOut = keyframes`
  0% {
    transform: scale(1) rotateY(180deg);
  }
  25% {
    transform: scale(.95) rotateY(135deg); 
  }
  50% {
    transform: scale(.9) rotateY(90deg); 
  }
  75% {
    transform: scale(.95) rotateY(45deg); 
  }
  100% {
    transform: scale(1) rotateY(0deg);
  }
`;

const FlipCard = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  animation: ${(props) => {
        if (props.first) {
            return 'none';
        }

        return (props.active ? scaleIn : scaleOut);
    }};
  animation-fill-mode: forwards;
  animation-duration: ${(props) => (props.duration ? `${props.duration}ms` : '300ms')};
  transform-style: preserve-3d;
  position: relative;
  z-index: 1;
`;

const FlipCardFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backface-visibility: hidden;
`;

const FlipCardBack = styled(FlipCardFront)`
  transform: rotateY(180deg);
`;

export {
    FlipCard,
    FlipCardFront,
    FlipCardBack
};
