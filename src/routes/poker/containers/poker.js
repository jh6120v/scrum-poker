import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { pointListDataFetch } from '../modules/point-list';

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  min-height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  margin:0 auto;
  padding-top: constant(safe-area-inset-top);
  padding-right: constant(safe-area-inset-right);
  padding-bottom: constant(safe-area-inset-bottom);
  padding-left: constant(safe-area-inset-left);
`;

const Header = styled.header`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  text-shadow: 1px 1px 2px rgba(29, 29, 31, .7);
  overflow: hidden;
  background-color: #aadff0;
  font-family: 'Mansalva', cursive;
  border-bottom: 0.5px dashed #fff;
`;

const Container = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: 65px 20px 40px 20px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 40px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  text-align: center;
  padding: 10px 0;
  background-color: #aadff0;
  font-size: 14px;
`;

const PokerWrap = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PokerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fff;
  width: 30%;
  height: 120px;
  border: 2px solid #fff;
  border-radius: 7px;
  padding: 15px;
  margin-bottom: 10px;
`;

const Poker = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // componentDidMount
        dispatch(pointListDataFetch());
    }, []);

    const { listData } = useSelector((state) => state.pointList);

    console.log(listData);
    return (
        <Wrapper>
            <Header data-testid="display_header">Scrum Poker</Header>
            <Container>
                <PokerWrap>
                    {
                        listData.map((val) => <PokerItem key={val.point}>{ val.point === 'coffee' ? '☕' : val.point }</PokerItem>)
                    }
                </PokerWrap>
            </Container>
            <Footer>此網頁僅供測試用</Footer>
        </Wrapper>
    );
};

export default Poker;
