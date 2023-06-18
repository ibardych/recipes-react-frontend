import styled from '@emotion/styled';
import { mediaSizes } from 'constants';

export const FavoriteRecipesStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;
