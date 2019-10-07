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

const Header = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-top: env(safe-area-inset-top);
  padding: 0 5px;
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

const NextLink = styled.div`
  min-width: 25px;
  height: 25px;
`;

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: 50px 0 40px 0;
`;

const Footer = styled.footer`
  width: 100%;
  height: 40px;
  overflow: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: env(safe-area-inset-bottom);
  padding: 5px 0;
  background-color: #aadff0;
  color: #fff;
  font-size: 16px;
  z-index: 3;
`;

export {
    Wrapper, Header, Title, PrevLink, NextLink, Container, Footer
};