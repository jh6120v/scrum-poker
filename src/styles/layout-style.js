import styled from 'styled-components';
import { respondTo } from './_mixin';

const Wrapper = styled.div`
  display: flex;
  max-width: 400px;
  min-height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0;
  ${respondTo.xs`
    margin: 0 auto;
  `}
`;

const HeaderStyle = styled.header`
  width: 100%;
  height: calc(44px + env(safe-area-inset-top));
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  //margin-top: env(safe-area-inset-top);
  padding: env(safe-area-inset-top) 5px 0 5px;
  overflow: hidden;
  background-color: #6cb8cf;
  z-index: 3;
  ${respondTo.xs`
    left: 50%;
    width: 400px;
    margin-left: -200px;
  `}
`;

const Title = styled.div`
  font-family: 'Fredoka One', Baloo;
  font-size: 20px;
  font-weight: bold;
`;

const PrevLink = styled.div`
 min-width: 25px;
 height: 25px;
`;

const NextLink = styled(PrevLink)``;

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
`;

export {
    Wrapper,
    HeaderStyle,
    Title,
    PrevLink,
    NextLink,
    Container
};
