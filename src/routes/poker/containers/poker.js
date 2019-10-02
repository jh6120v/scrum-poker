import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pointListDataFetch } from '../modules/point-list';
import { pointSelectedSet, pointSelectedClear, pointSelectedFlip } from '../modules/point-selector';
import {
    Wrapper,
    Header,
    Container,
    Footer,
    PokerContainer,
    PokerListWrap,
    PokerSelectWrap,
    PokerItemWrap,
    PokerItem,
    PokerItemInner,
    BackButton,
    PokerSelectSafari,
    PokerSelectContainer,
    PokerSelectedItemFront,
    PokerSelectedItemBack,
    PokerSelectedItemBackInner,
    PokerItemMask, PokerSelectMask
} from '../styles';
import { getRandom } from '../../../commons/utils';

const Poker = () => {
    const dispatch = useDispatch();
    const [first, setFirst] = useState(true);

    useEffect(() => {
        // componentDidMount
        dispatch(pointListDataFetch());
    }, [dispatch]);

    const { listData } = useSelector((state) => state.pointList);
    const {
        isSelect, selected, img, itemFlip
    } = useSelector((state) => state.pointSelector);

    const select = useCallback((point) => {
        setFirst(false);
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
                <BackButton onClick={() => clear()} isSelect={isSelect}>＜ Back</BackButton>
            </Header>
            <Container>
                <PokerContainer active={isSelect} first={first} duration={400}>
                    <PokerListWrap>
                        {
                            listData.map((val) => (
                                <PokerItemWrap key={val.point} onClick={() => select(val.point)}>
                                    <PokerItem>
                                        <PokerItemMask active={isSelect} />
                                        <PokerItemInner>{val.point === 'coffee' ? '☕' : val.point}</PokerItemInner>
                                    </PokerItem>
                                </PokerItemWrap>
                            ))
                        }
                    </PokerListWrap>
                    <PokerSelectWrap>
                        <PokerSelectSafari>
                            <PokerSelectMask active={!isSelect} onClick={flip} ref={node} />
                            <PokerSelectContainer active={itemFlip} duration={400} >
                                <PokerSelectedItemFront className={`img-${img}`}>
                                    {selected === 'coffee' ? '☕' : selected}
                                </PokerSelectedItemFront>
                                <PokerSelectedItemBack>
                                    <PokerSelectedItemBackInner />
                                </PokerSelectedItemBack>
                            </PokerSelectContainer>
                        </PokerSelectSafari>
                    </PokerSelectWrap>
                </PokerContainer>

            </Container>
            <Footer>For Testing Purposes Only</Footer>
        </Wrapper>
    );
};

export default Poker;
