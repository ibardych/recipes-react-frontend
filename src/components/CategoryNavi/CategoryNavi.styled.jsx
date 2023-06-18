import styled from '@emotion/styled';
import { colors } from 'constants';
import { NavLink } from 'react-router-dom';
import { transition } from 'helpers';
import { mediaSizes } from 'constants';

export const CategoryNaviStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 32px;
  position: relative;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  &::after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 1px;
    background-color: ${colors.color3};
  }

  & .slider {
    padding: 0 0px 23px 19px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      padding: 0 0px 18px 19px;
    }
  }

  & .slide {
    width: auto;
  }

  & .swiper-button {
    top: 18px;
    color: #dcdcdc;
    &::after {
      font-size: 18px;
    }

    &.prev {
      left: -26px;
      @media screen and (min-width: ${mediaSizes.desktop}) {
        left: -30px;
      }
    }
    &.next {
      right: -26px;
      @media screen and (min-width: ${mediaSizes.desktop}) {
        right: -30px;
      }
    }
  }

  & .swiper-button-disabled {
    display: none;
  }
`;

export const LinkStyled = styled(NavLink)`
  font-style: normal;
  font-size: 14px;
  line-height: 1;
  color: ${colors.color3};
  display: flex;
  align-items: center;
  padding: 10px;
  ${transition('opacity', 'color')};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 11px;
  }

  &:hover {
    color: ${colors.color13};
  }

  &.active {
    color: ${colors.color1};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -23px;
      height: 2px;
      width: 100%;
      background-color: ${colors.color1};

      @media screen and (min-width: ${mediaSizes.tablet}) {
        bottom: -18px;
      }
    }
  }

  & .search {
    fill: transparent;
    stroke: ${colors.color14};
    width: 24px;
    height: 24px;
  }
`;
