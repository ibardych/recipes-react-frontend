import { colors } from 'constants';
import { mediaSizes } from 'constants';

const { default: styled } = require('@emotion/styled');

export const CategoryStyled = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 100px;
  }

  &.last {
    margin-bottom: 40px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-bottom: 32px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      margin-bottom: 14px;
    }
  }

  & .slider {
    margin-bottom: 24px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-bottom: 40px;
    }
  }

  & button.all {
    margin-left: auto;
  }
`;

export const CategoryTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${colors.color16};
  margin-bottom: 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 44px;
    margin-bottom: 40px;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;

  & .swiper-button {
    top: 50%;
    color: #919191;
    transform: translateY(-50%);
    background-color: #fff;
    border-radius: 100px;
    width: 30px;
    height: 30px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);

    @media screen and (min-width: ${mediaSizes.desktop}) {
      left: 30px;
    }

    &::after {
      font-size: 18px;
      position: relative;
    }

    &.prev {
      left: 20px;
      &::after {
        right: 2px;
      }
      @media screen and (min-width: ${mediaSizes.desktop}) {
        left: 20px;
      }
    }
    &.next {
      right: 20px;
      &::after {
        left: 2px;
      }
      @media screen and (min-width: ${mediaSizes.desktop}) {
        right: 20px;
      }
    }
  }

  & .swiper-button-disabled {
    display: none;
  }
`;
