import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { mediaSizes } from 'constants/media';
import { colors } from 'constants';
import bgMobile from 'images/MobileMenu/bg-mobile@2x.png';
import bgTablet from 'images/MobileMenu/bg-tablet@2x.png';
import { container, transition } from 'helpers';

export const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: url(${bgMobile}) no-repeat right bottom ${colors.color11};
  background-size: 270px auto;
  z-index: 100;
  overflow-y: auto;
  ${transition('background-color')};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    background: url(${bgTablet}) no-repeat right bottom ${colors.color11};
    background-size: 550px auto;
  }

  .theme.dark & {
    background-color: ${colors.color9};
  }

  & .logo {
    position: absolute;
    top: 21px;
    left: 20px;
    display: inline-block;
    line-height: 1;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      left: 32px;
    }
  }

  & .close {
    position: absolute;
    top: 24px;
    right: 24px;
    stroke: ${colors.color8};
    stroke-width: 2px;
    width: 32px;
    height: 32px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      right: 36px;
    }

    .theme.dark & {
      stroke: ${colors.color7};
    }
  }

  & .theme-toggler {
    position: absolute;
    bottom: 32px;
    left: 32px;
  }
`;

export const List = styled.ul`
  margin-top: 124px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 100px;

  & li {
    text-align: center;

    & a {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 1;
      text-align: center;
      letter-spacing: -0.02em;
      color: ${colors.color8};
      display: inline-flex;
      align-items: center;
      gap: 8px;

      .theme.dark & {
        color: ${colors.color7};
      }

      @media screen and (min-width: ${mediaSizes.mobile}) {
      }

      &.active {
        color: ${colors.color1} !important;
        font-weight: 600;
      }

      & .search {
        width: 20px;
        height: 20px;
        stroke: ${colors.color8};
        fill: transparent;

        .theme.dark & {
          stroke: ${colors.color7};
        }
      }
    }
  }
`;

export const MenuContainer = styled.div`
  ${container};
  position: relative;
  height: 100%;
`;

export const Link = styled(NavLink)``;
