import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants';
import { NavLink } from 'react-router-dom';

export const RecipeThumbStyled = styled(NavLink)`
  position: relative;
  flex-basis: 100%;
  background: url(${({ url }) => url}) no-repeat center #f5f5f5;
  background-size: cover;
  border-radius: 8px;
  display: block;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-basis: calc((100% - (1 * 32px)) / 2);
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    flex-basis: calc((100% - (3 * 14px)) / 4);
  }

  &::after {
    content: '';
    display: block;
    padding-top: 100%;
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
    color: ${colors.color15};

    .theme.dark & {
      background-color: ${colors.color6};
      color: ${colors.color7};
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      left: 16px;
      right: 16px;
      bottom: 23px;
    }
  }
`;
