import styled from '@emotion/styled';
import { mediaSizes } from 'constants';

export const PopularRecipesStyled = styled.div`
  margin-bottom: 40px;
  min-height: 200px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: flex;
    flex-wrap: wrap;
    gap: 0px 32px;
  }

  &.no-items {
    min-height: 0px;
  }
`;
