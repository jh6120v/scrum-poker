import styled from 'styled-components';

const ColorWatch = styled.div`
  padding: 3px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1);
  display: inline-block;
  cursor: pointer;
  position: relative;
`;

const ColorWatchShow = styled.div`
  width: 30px;
  height: 15px;
  border-radius: 2px;
  background-color: ${(props) => (props.color ? props.color : '#FFF')};
`;

const ColorPicker = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export {
    ColorWatch,
    ColorWatchShow,
    ColorPicker
};