import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.color7};

  ${transition('background-color')};

  &.theme.dark {
    background-color: ${colors.color9};
  }
`;
