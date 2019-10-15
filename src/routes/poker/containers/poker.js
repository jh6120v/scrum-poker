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
    const { theme, autoHideCard } = useSelector((state) => state.personal);

    useEffect(() => {
        console.log('components did mount.');

        dispatch(headerTitleDefault());
        dispatch(nextLinkActSetting());

        return () => {
            console.log('components will unmount.');

            dispatch(pointSelectedClear());
            setFirst(true);
        };
    }, [dispatch]);

    const select = useCallback((point, isAutoHideCard) => {
        setFirst(false);
        dispatch(pointSelectedSet({
            isSelect: !isSelect,
            selected: point,
            img: getRandom(1, 13),
            itemFlip: isAutoHideCard
        }));

        dispatch(prevLinkActClose());
        dispatch(headerTitleSet({
            title: ''
        }));
    }, [dispatch, isSelect]);

    const flip = useCallback(() => dispatch(pointSelectedFlip()), [dispatch]);

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
                            <PokerItemWrap key={val.point} onClick={() => select(val.point, autoHideCard)}>
                                <PokerItem borderColor={theme.cardList.borderColor}>
                                    <PokerItemMask active={isSelect} />
                                    <PokerItemInner fontColor={theme.cardList.fontColor} bgColor={theme.cardList.bgColor}>
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
                            <PokerSelectedItemFront className={`img-${img}`} fontColor={theme.cardFront.fontColor} bgColor={theme.cardFront.bgColor}>
                                <PokerSelectedItemFrontWrap>
                                    <PokerSelectedItemFrontMask active={itemFlip} />
                                    {selected === 'coffee' ? <CoffeeCat /> : selected}
                                </PokerSelectedItemFrontWrap>
                            </PokerSelectedItemFront>
                            <PokerSelectedItemBack borderColor={theme.cardBack.borderColor}>
                                <PokerSelectedItemBackWrap>
                                    <PokerSelectedItemBackMask active={!itemFlip} />
                                    <PokerSelectedItemBackInner bgColor={theme.cardBack.bgColor} />
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
