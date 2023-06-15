import styled from '@emotion/styled';
import { colors } from 'constants';

export const MessageStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;

  & div {
    color: ${colors.color7};
    border-radius: 5px;
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 16px;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 500;
    background-image: repeating-linear-gradient(
      135deg,
      rgba(255, 255, 42555, 0.1),
      rgba(255, 255, 255, 0.1) 5px,
      rgba(255, 255, 255, 0) 5px,
      rgba(255, 255, 255, 0) 10px
    );

    & svg {
      width: 22px;
      height: 22px;
      stroke: ${colors.color10};
      fill: ${colors.color10};
    }
  }
`;

//
