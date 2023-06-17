import styled from '@emotion/styled';
import { mediaSizes } from 'constants';

export const RecipeCardListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const RecipeCard = styled.div`
  flex-basis: 100%;
  background-color: #fff;
  padding: 14px 9px;
  border-radius: 8px;
`;
