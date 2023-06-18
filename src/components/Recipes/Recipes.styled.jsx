import styled from '@emotion/styled';
import { mediaSizes } from 'constants';

export const RecipesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 32px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 100px 14px;
  }
`;
