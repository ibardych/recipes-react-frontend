import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { NavLink } from 'react-router-dom';

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

export const RecipeThumbStyled = styled(NavLink)`
  position: relative;
  flex-basis: 100%;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-basis: calc((100% - (1 * 32px)) / 2);
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    flex-basis: calc((100% - (3 * 14px)) / 4);
  }

  & img {
    border-radius: 8px;
  }

  & .title {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 26px;
    background-color: #fff;
    padding: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.24px;
    border-radius: 8px;

    @media screen and (min-width: ${mediaSizes.desktop}) {
      left: 16px;
      right: 16px;
      bottom: 23px;
    }
  }
`;
