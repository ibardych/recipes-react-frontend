import styled from '@emotion/styled';
import { mediaSizes } from 'constants';

export const MyRecipesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  min-height: 300px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  &.no-items {
    min-height: 0px;
  }
`;
