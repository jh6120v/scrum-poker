import styled, { keyframes } from 'styled-components';
import { respondTo } from '../../../styles/_mixin';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  height: 100%;
  padding: 30px 15px;
  background: #e2e2e2;
  background: -moz-linear-gradient(45deg,  #e2e2e2 0%, #dbdbdb 50%, #d1d1d1 51%, #fefefe 100%);
  background: -webkit-linear-gradient(45deg,  #e2e2e2 0%,#dbdbdb 50%,#d1d1d1 51%,#fefefe 100%);
  background: linear-gradient(45deg,  #e2e2e2 0%,#dbdbdb 50%,#d1d1d1 51%,#fefefe 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 );
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.div`
  width: calc((100% - 100px) / 2);
  height: 200px;
  background: url(${(props) => props.img}) no-repeat center;
  background-size: contain;
  animation: ${rotate} 3s linear infinite;
  ${respondTo.sm`
    width: 220px;
  `}
`;

const Title = styled.h1`
  width: 100%;
  font-size: 40px;
  text-align: center;
  padding: 30px 0;
`;

const backAndForth = keyframes`
  0% {
    left: 0;
  }
  50% {
    left: calc(100% - 2rem);
    background-color: #8660C2;
  }
  100% {
    left: 0;
  }
`;

const LogoLink = styled.div`
  width: 80px;
  margin: 0 10px;
  position: relative;
  &:before {
    content: '';
    width: 1rem;
    height: 1rem;
    background-color: #62DAFB;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: calc(50% - 0.5rem);
    transition: all 1s ease-in-out;
    animation: ${backAndForth} 1.7s infinite;
  }
  ${respondTo.xs`
    &:before {
      width: 2rem;
      height: 2rem;
      top: calc(50% - 1rem);
    }
  `}
`;

export {
    Container,
    Logo,
    Title,
    LogoLink
};
