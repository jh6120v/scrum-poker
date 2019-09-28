import styled from 'styled-components';

const FlipCard = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  transition: all ${(props) => (props.duration ? `${props.duration}ms` : '500ms')};
  transform: ${(props) => (props.active ? 'rotateY(180deg)' : 'none')};
  transform-style: preserve-3d;
  position: relative;
  z-index: 1;
`;

const FlipCardFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: ${((props) => (props.active ? 'hidden' : 'visible'))};
`;

const FlipCardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
  backface-visibility: ${((props) => (props.active ? 'visible' : 'hidden'))};
`;

export {
    FlipCard,
    FlipCardFront,
    FlipCardBack
};