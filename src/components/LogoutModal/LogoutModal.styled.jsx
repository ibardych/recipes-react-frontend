import styled from '@emotion/styled';
import { colors } from 'constants';

export const LogoutModalStyled = styled.div``;

export const Text = styled.div`
  font-size: 18px;
  line-height: 1.33;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 32px;

  .theme.dark & {
    color: ${colors.color7};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;

  & .button {
    height: 59px;
  }
`;
