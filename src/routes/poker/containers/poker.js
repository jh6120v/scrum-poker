import React, {
    useCallback, useEffect, useState, useRef
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pointSelectedSet, pointSelectedClear, pointSelectedFlip } from '../modules/point-selector';
import {
    PokerContainer,
    PokerListWrap,
    PokerSelectWrap,
    PokerItemWrap,
    PokerItem,
    PokerItemInner,
    PokerSelectSafari,
    PokerSelectContainer,
    PokerSelectedItemFront,
    PokerSelectedItemBack,
    PokerSelectedItemBackInner,
    PokerItemMask,
    PokerSelectMask,
    PokerSelectedItemFrontWrap,
    PokerSelectedItemBackWrap,
    PokerSelectedItemFrontMask,
    PokerSelectedItemBackMask, CoffeeCat, PokerWrap
} from '../styles';
import { getRandom } from '../../../commons/utils';
import {
    headerTitleDefault, headerTitleSet, nextLinkActSetting, prevLinkActClose
} from '../../../modules/header';

const Poker = () => {
    const dispatch = useDispatch();
    const [first, setFirst] = useState(true);
    const { listData } = useSelector((state) => state.pointList);
    const {
        isSelect, selected, img, itemFlip
    } = useSelector((state) => state.pointSelector);

    useEffect(() => {
        console.log('components did mount.');

        return () => {
            console.log('components will unmount.');

            dispatch(pointSelectedClear());
            setFirst(true);
        };
    }, [dispatch]);

    useEffect(() => {
        dispatch(headerTitleDefault());
        dispatch(nextLinkActSetting());
    }, [dispatch]);

    const select = useCallback((point) => {
        setFirst(false);
        dispatch(pointSelectedSet({
            isSelect: !isSelect,
            selected: point,
            img: getRandom(1, 13)
        }));

        dispatch(prevLinkActClose());
        dispatch(headerTitleSet({
            title: ''
        }));
    }, [dispatch, isSelect]);

    const flip = useCallback(() => dispatch(pointSelectedFlip()), [dispatch]);

    // console.log(isSelect);

    const node = useRef();
    const resume = useCallback((e) => {
        if (node.current.contains(e.target)) {
            return;
        }

        dispatch(pointSelectedClear());
        dispatch(nextLinkActSetting());
        dispatch(headerTitleDefault());
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener('click', resume, true);

        return () => {
            document.removeEventListener('click', resume, true);
        };
    }, [resume]);

    return (
        <PokerWrap>
            <PokerContainer active={isSelect} first={first} duration={400}>
                <PokerListWrap>
                    {
                        listData.map((val) => (
                            <PokerItemWrap key={val.point} onClick={() => select(val.point)}>
                                <PokerItem>
                                    <PokerItemMask active={isSelect} />
                                    <PokerItemInner>
                                        {val.point === 'coffee'
                                            ? <CoffeeCat width="80%" height="50%" /> : val.point}
                                    </PokerItemInner>
                                </PokerItem>
                            </PokerItemWrap>
                        ))
                    }
                </PokerListWrap>
                <PokerSelectWrap>
                    <PokerSelectSafari ref={node}>
                        <PokerSelectMask active={!isSelect} onClick={flip} />
                        <PokerSelectContainer active={itemFlip} duration={400}>
                            <PokerSelectedItemFront className={`img-${img}`}>
                                <PokerSelectedItemFrontWrap>
                                    <PokerSelectedItemFrontMask active={itemFlip} />
                                    {selected === 'coffee' ? <CoffeeCat /> : selected}
                                </PokerSelectedItemFrontWrap>
                            </PokerSelectedItemFront>
                            <PokerSelectedItemBack>
                                <PokerSelectedItemBackWrap>
                                    <PokerSelectedItemBackMask active={!itemFlip} />
                                    <PokerSelectedItemBackInner />
                                </PokerSelectedItemBackWrap>
                            </PokerSelectedItemBack>
                        </PokerSelectContainer>
                    </PokerSelectSafari>
                </PokerSelectWrap>
            </PokerContainer>
        </PokerWrap>
    );
};

export default Poker;
