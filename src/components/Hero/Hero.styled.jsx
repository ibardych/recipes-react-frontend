import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { container } from 'helpers';

export const HeroStyled = styled.div`
  ${container};
  padding-top: 47px;
  padding-bottom: 160px;
  text-align: center;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-top: 121px;
    padding-bottom: 250px;
    text-align: left;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-bottom: 350px;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  & .bg0 {
    position: absolute;
    top: 110px;
    right: -100px;
    width: 332px;
    height: 640px;
    fill: ${colors.color11};
    z-index: 0;
    transform: rotateZ(12deg);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 0;
      right: -16px;
      transform: rotateZ(0deg);
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      display: none;
    }
  }

  & .bg0-desktop {
    display: none;

    @media screen and (min-width: ${mediaSizes.desktop}) {
      display: block;
      position: absolute;
      top: -60px;
      right: -100px;
      width: 725px;
      height: 689px;
      fill: ${colors.color11};
      z-index: 0;
      transform: rotateZ(0deg);
    }
  }

  & .bg1 {
    position: absolute;
    top: 70px;
    left: 0;
    width: 45px;
    max-width: none;
    height: auto;
    z-index: 0;
  }

  & .bg1-tablet {
    position: absolute;
    top: 40px;
    left: -105px;
    width: 185px;
    max-width: none;
    height: auto;
    z-index: 0;

    @media screen and (min-width: ${mediaSizes.desktop}) {
      top: 10px;
    }
  }

  & .bg2 {
    position: absolute;
    top: 240px;
    right: -270px;
    width: 620px;
    max-width: none;
    height: auto;
    z-index: 0;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 140px;
      right: -210px;
      width: 620px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      top: 200px;
      right: -30px;
      width: 620px;
    }
  }

  & .bg3 {
    position: absolute;
    top: 300px;
    left: 50%;
    width: 293px;
    max-width: none;
    height: auto;
    z-index: 0;
    transform: translateX(-50%);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 160px;
      transform: translateX(10%);
      width: 340px;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      top: 120px;
      transform: translateX(10%);
      width: 500px;
    }
  }

  & .bg4-tablet {
    position: absolute;
    top: 470px;
    left: 50%;
    width: 200px;
    max-width: none;
    height: auto;
    z-index: 0;
    transform: translateX(100px);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      display: block;
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      top: 540px;
      width: 220px;
      transform: translateX(350px);
    }
  }
`;

export const HeroWrapper = styled.div`
  position: relative;
  z-index: 1;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 364px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 505px;
  }

  & h1 {
    font-size: 60px;
    line-height: 1;
    font-weight: 400;
    margin-bottom: 14px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 72px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 100px;
      letter-spacing: -0.005em;
    }

    .theme.dark & {
      color: ${colors.color7};
    }

    & span {
      color: ${colors.color1};
    }
  }

  & .hero-text {
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: -0.02em;
    width: 248px;
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 364px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-bottom: 32px;
      width: 362px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 18px;
      width: 485px;
      margin-bottom: 50px;
    }
  }

  & .hero-card {
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translateX(-100px);
    background-color: ${colors.color7};
    padding: 8px;
    border-radius: 8px;
    width: 255px;
    max-width: 100%;
    text-align: left;
    display: block;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.24px;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 160px;
      transform: translateX(250px);
      width: 260px;
      padding: 12px;
      font-size: 14px;
      line-height: 1.4;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      top: 220px;
      transform: translateX(690px);
      width: 298px;
      padding: 16px;
    }

    & span {
      color: ${colors.color1};
    }

    & a {
      float: right;
      margin-top: 7px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: ${colors.color15};
      font-size: 12px;

      & .icon {
        line-height: 1.2;
        font-weight: 400;
        width: 18px;
        height: 18px;
        stroke: ${colors.color15};
        fill: transparent;
      }
    }
  }
`;

//
