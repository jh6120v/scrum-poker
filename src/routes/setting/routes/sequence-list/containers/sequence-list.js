import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MdCheckmark from 'react-ionicons/lib/MdCheckmark';
import { SettingItem, SettingWrap } from '../../../styles';
import { headerTitleSet, prevLinkActGoBack } from '../../../../../modules/header';
import { personalSequenceTypeChange } from '../../../../../modules/personal-setting';
import { pointListDataSet } from '../../../../../modules/point-list';
import { Name, Sequence, List } from '../styles';
import { history } from '../../../../../store';

const SequenceList = () => {
    const dispatch = useDispatch();
    const sequenceList = useSelector((state) => state.sequence.sequenceList);
    const personal = useSelector((state) => state.personal);

    useEffect(() => {
        dispatch(headerTitleSet({
            title: 'Sequence Type'
        }));
        dispatch(prevLinkActGoBack());
    }, [dispatch]);

    const changeSequenceType = useCallback((type) => {
        dispatch(personalSequenceTypeChange(type));

        dispatch(pointListDataSet({
            listName: type,
            listData: sequenceList[type]
        }));

        history.goBack();
    }, [dispatch, sequenceList]);

    return (
        <SettingWrap>
            {
                Object.keys(sequenceList).map((val) => (
                    <SettingItem key={val} onClick={() => changeSequenceType(val)} alignItemsCenter>
                        <Sequence>
                            <Name>{val.replace('-', ' ')}</Name>
                            <List>
                                (
                                {
                                    sequenceList[val].reduce((accumulator, currentValue, currentIndex) => {
                                        if (currentIndex < 6) {
                                            accumulator.push(currentValue.point);
                                        }

                                        return accumulator;
                                    }, []).join(',')
                                }
                                {
                                    sequenceList[val].length > 5 ? ` ... ${sequenceList[val][sequenceList[val].length - 1].point}` : null
                                }
                                )
                            </List>
                        </Sequence>
                        {val === personal.sequenceType ? <MdCheckmark color="#4f6571" /> : null}
                    </SettingItem>
                ))
            }
        </SettingWrap>
    );
};

export default SequenceList;
