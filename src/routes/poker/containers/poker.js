import React, { useCallback, useEffect, useRef } from 'react';
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

    const node = useRef();

    const resume = useCallback((e) => {
        if (node.current.contains(e.target)) {
            return;
        }

        clear();
    }, [clear]);

    useEffect(() => {
        document.addEventListener('click', resume, true);

        return () => {
            document.removeEventListener('click', resume, true);
        };
    }, [resume]);

    return (
        <Wrapper>
            <Header data-testid="display_header">
                {isSelect ? <BackButton onClick={() => clear()}>Back</BackButton> : null}
            </Header>
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
                        <PokerSelectContainer active={itemFlip} onClick={flip} ref={node}>
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
            <Footer>For Testing Purposes Only</Footer>
        </Wrapper>
    );
};

export default Poker;
