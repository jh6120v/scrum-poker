import styled from 'styled-components';

const ModelShadow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,.3);
  z-index: 10;
`;

const ModelWrap = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 250px;
  max-width: 90%;
  background-color: #fff;
  z-index: 11;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 5px;
  padding: 20px 15px 15px;
  font-family: Arial, serif;
`;

const ModelContent = styled.div`
  width: 100%;
  padding: 0 0 20px 0;
`;

const ModelFooter = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
`;

const ConfirmButton = styled.div`
  padding: 10px 15px;
  margin: 0 5px;
  background-color: #5AC9E8;
  color: #FFF;
  font-size: .8rem;
  cursor: pointer;
  border-radius: 2px;
`;

export {
    ModelShadow,
    ModelWrap,
    ModelContent,
    ModelFooter,
    ConfirmButton
};
