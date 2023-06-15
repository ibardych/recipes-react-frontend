import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants';
import { container } from 'helpers';
import bgimageMobile from 'images/WelcomePage/welcome-bg-mobile@2x.jpg';
import bgimageTablet from 'images/WelcomePage/welcome-bg-tablet@2x.jpg';
import bgimageDesktop from 'images/WelcomePage/welcome-bg-desktop@2x.jpg';

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 55px;
  background: url(${bgimageMobile}) no-repeat center;
  background-size: cover;
  height: 100vh;

  @media screen and (min-width: ${mediaSizes.mobile1}) {
    background: url(${bgimageTablet}) no-repeat center;
    background-size: cover;
  }
  @media screen and (min-width: ${mediaSizes.tablet1}) {
    background: url(${bgimageDesktop}) no-repeat center;
    background-size: cover;
  }

  & .wrapper {
    ${container};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.color7};
    text-align: center;

    & img {
      width: 54px;
      height: 54px;
      margin-bottom: 28px;

      @media screen and (min-width: ${mediaSizes.tablet}) {
        width: 68px;
        height: 68px;
        margin-bottom: 44px;
      }
    }
    & h1 {
      font-size: 24px;
      line-height: 1;
      font-weight: 600;
      margin-bottom: 24px;
      letter-spacing: -0.02em;
      color: ${colors.color7};

      @media screen and (min-width: ${mediaSizes.tablet}) {
        font-size: 28px;
        margin-bottom: 14px;
      }
    }
    & p {
      font-size: 14px;
      line-height: 1.28;
      margin-bottom: 44px;
      letter-spacing: -0.02em;
      max-width: 500px;

      @media screen and (min-width: ${mediaSizes.tablet}) {
        font-size: 18px;
        line-height: 1.33;
        margin-bottom: 40px;
      }
    }

    & .buttons {
      display: flex;
      gap: 12px;
      justify-content: center;
    }
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    /* ${container}
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start; */
  }
`;
