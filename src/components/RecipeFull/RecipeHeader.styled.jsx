import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { container } from 'helpers';
import bgHeroMobile from 'images/Recipe/bg-hero-mobile@2x.png';
import bgHeroTablet from 'images/Recipe/bg-hero-tablet@2x.png';
import bgHeroDesktop from 'images/Recipe/bg-hero-desktop@2x.png';

export const RecipeHeaderStyled = styled.div`
  margin-top: -112px;
  padding-top: 144px;
  margin-bottom: 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-top: -135px;
    padding-top: 136px;
    background: url(${bgHeroDesktop}) no-repeat bottom #f5f5f5;
    background-size: cover;
    margin-bottom: 50px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-top: -163px;
    padding-top: 164px;
  }
  @media screen and (max-width: calc(${mediaSizes.tablet} + 1px)) {
    background: url(${bgHeroTablet}) no-repeat bottom #f5f5f5;
    background-size: cover;
  }
  @media screen and (max-width: calc(${mediaSizes.mobile} + 1px)) {
    background: url(${bgHeroMobile}) no-repeat bottom #f5f5f5;
    background-size: cover;
  }

  & button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (min-width: ${mediaSizes.tablet}) {
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
    }
  }
`;

export const RecipeTitle = styled.h1`
  ${container};
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${colors.color1};
  margin-bottom: 18px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 44px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const RecipeDescription = styled.div`
  ${container};
  text-align: center;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${colors.color8};
  margin-bottom: 24px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 18px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    max-width: 700px;
  }
`;

export const RecipeTime = styled.div`
  margin-top: 42px;
  padding-bottom: 90px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-top: 60px;
    font-size: 16px;
    padding-bottom: 32px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-bottom: 48px;
  }

  & .icon {
    fill: transparent;
    width: 14px;
    height: 14px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 18px;
      height: 18px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 20px;
      height: 20px;
    }
  }
`;
