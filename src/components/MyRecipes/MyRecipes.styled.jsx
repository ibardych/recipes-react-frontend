import styled from '@emotion/styled';
import { mediaSizes } from 'constants';

export const MyRecipesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;
