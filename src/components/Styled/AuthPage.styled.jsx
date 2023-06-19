import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants';

export const AuthPageStyled = styled.div`
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }

  &::before {
    content: '';
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background-color: ${colors.color9};
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: calc(305px + 30px);
    left: 50%;
    transform: translate(-50%, -100%);
    border-radius: 50%;
    height: 3000px;
    width: 3000px;
    background-color: ${colors.color7};
    z-index: 0;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      height: 2500px;
      width: 2500px;
      top: 500px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      height: 7500px;
      width: 7500px;
      top: 600px;
    }
  }

  & img.bg {
    position: absolute;
    top: 87px;
    left: 50%;
    transform: translateX(-50%);
    height: 250px;
    width: auto;
    z-index: 1;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 98px;
      height: 359px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      transform: translateX(-500px);
      top: 315px;
    }
  }
`;
