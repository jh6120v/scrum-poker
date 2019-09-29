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