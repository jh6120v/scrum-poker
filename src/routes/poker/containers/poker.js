import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pointListDataFetch } from '../modules/point-list';
import { pointSelectedSet, pointSelectedClear, pointSelectedFlip } from '../modules/point-selector';
import {
    Wrapper, Header, Container, Footer,
    PokerContainer, PokerListWrap, PokerSelectWrap,
    PokerItemWrap, PokerItem, PokerItemInner,
    BackButton,
    PokerSelectContainer, PokerSelectedItemFront, PokerSelectedItemBack, PokerSelectedItemBackInner
} from '../styles';
import { getRandom } from '../../../commons/utils';

const Poker = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // componentDidMount
        dispatch(pointListDataFetch());
    }, [dispatch]);

    const { listData } = useSelector((state) => state.pointList);
    const {
        isSelect, selected, img, itemFlip
    } = useSelector((state) => state.pointSelector);

    const select = useCallback((point) => {
        dispatch(pointSelectedSet({
            isSelect: !isSelect,
            selected: point,
            img: getRandom(1, 13)
        }));
    }, [dispatch, isSelect]);

    const clear = useCallback(() => dispatch(pointSelectedClear()), [dispatch]);
    const flip = useCallback(() => dispatch(pointSelectedFlip()), [dispatch]);

    console.log(listData);

    return (
        <Wrapper>
            <Header data-testid="display_header">Scrum Poker</Header>
            {isSelect ? <BackButton onClick={() => clear()}>Back</BackButton> : null}
            <Container>
                <PokerContainer active={isSelect}>
                    <PokerListWrap>
                        {
                            listData.map((val) => (
                                <PokerItemWrap key={val.point} onClick={() => select(val.point)}>
                                    <PokerItem>
                                        <PokerItemInner>{val.point === 'coffee' ? '☕' : val.point}</PokerItemInner>
                                    </PokerItem>
                                </PokerItemWrap>
                            ))
                        }
                    </PokerListWrap>
                    <PokerSelectWrap active={isSelect}>
                        <PokerSelectContainer active={itemFlip} onClick={flip}>
                            <PokerSelectedItemFront className={`img-${img}`}>
                                {selected === 'coffee' ? '☕' : selected}
                            </PokerSelectedItemFront>
                            <PokerSelectedItemBack>
                                <PokerSelectedItemBackInner />
                            </PokerSelectedItemBack>
                        </PokerSelectContainer>
                    </PokerSelectWrap>
                </PokerContainer>

            </Container>
            <Footer>For testing purposes only</Footer>
        </Wrapper>
    );
};

export default Poker;
