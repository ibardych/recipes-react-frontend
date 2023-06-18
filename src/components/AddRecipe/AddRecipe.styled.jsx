import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants';

export const AddRecipeStyled = styled.div`
  width: 100%;
  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: flex;
    gap: 121px;
  }
`;

export const PopularRecipesWrapper = styled.div`
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 320px;
    flex-shrink: 0;
  }

  & .follow-us {
    margin-top: 0;
  }
`;

export const SocialIcons = styled.ul`
  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: flex;
    gap: 20px;
  }

  & a {
    display: block;
    width: 26px;
    height: 26px;

    & .icon {
      fill: ${colors.color1};
      width: 26px;
      height: 26px;
    }
  }
`;
