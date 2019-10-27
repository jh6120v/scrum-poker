import styled, { keyframes, css } from 'styled-components';

const backgroundshow = keyframes`
  from {
    background-color: rgba(170,223,240, 1);
  }
  to {
    background-color: rgba(159,209,224, 1);
  }
`;

const SettingWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #9fd4e5;
  padding-top: 44px;
`;

const SettingItem = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #6cb8cf;
  color: #4f6571;
  line-height: 1.5rem;
  padding: 10px 15px;
  font-family: Arial, serif;
  font-size: .9rem;
  text-transform: capitalize;
  cursor: pointer;
  flex-wrap: wrap;
  ${(props) => (props.alignItemsCenter ? css`align-items: center;` : '')}
  ${(props) => {
        if (props.isTitle) {
            return css`
              background-color: #9fd4e5;
              padding-top: 20px;
              padding-bottom: 5px;
              font-size: .8rem;
              font-weight: bold;
            `;
        }

        if (props.isSpace) {
            return css`
              padding: 5px 0;
            `;
        }

        return css`
          background-color: #aadff0;
          justify-content: ${props.justifyContentSpaceAround ? 'space-around' : 'space-between'};
          ${!props.noActive ? css`
              &:active {
                animation: ${backgroundshow} .1s ease-in;
                animation-iteration-count: 1;
                animation-fill-mode: forwards;
              }
          ` : ''}
        `;
    }}
`;

const Version = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #4f6571;
  font-family: Arial, serif;
  font-size: .8rem;
  padding: 20px 0;
`;

export {
    SettingWrap, SettingItem,
    Version
};
