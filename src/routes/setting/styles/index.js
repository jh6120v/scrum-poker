import styled, { css } from 'styled-components';

const SettingWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #9fd4e5;
  padding-top: 50px;
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
          justify-content: space-between;
          align-items: center;
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
