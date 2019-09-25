import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled.header`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  padding: 15px 0;
  text-shadow: 1px 1px 2px rgba(29, 29, 31, .7);
`;

const Poker = () => (
    <Wrapper>
        <Header>Scrum Poker</Header>
    </Wrapper>
);

export default Poker;