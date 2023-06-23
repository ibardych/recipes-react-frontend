import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';

export const LoaderStyled = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: inner 0px 0px 200px 10px ${colors.color1};

  body.dark-theme & {
    background-color: rgba(0, 0, 0, 0.8);
  }

  & .lds-ripple {
    display: inline-block;
    position: relative;
    width: 72px;
    height: 72px;
    border-radius: 100px;
  }
  & .lds-ripple div {
    position: absolute;
    border: 4px solid ${colors.color1};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & .lds-ripple div:nth-of-type(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

export const LoaderContainer = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderSmallStyled = styled.div`
  height: 0px;
  width: 0px;
  transform: scale(${({ scale }) => scale});
  position: relative;
  left: ${({ left }) => left};
  top: ${({ top }) => top};

  &.ingredient {
    position: absolute;
    right: 22px;
    left: auto;
    top: 50%;
    transform: scale(0.3) translateY(-50%);
    @media screen and (min-width: ${mediaSizes.tablet}) {
      right: 32px;
      transform: scale(0.4) translateY(-50%);
    }
  }

  &.toggle-favorie {
    top: 20px;
    transform: scale(0.4) translateY(-50%);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 24px;
      transform: scale(0.5) translateY(-50%);
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      top: 30px;
      transform: scale(0.6) translateY(-50%);
    }
  }

  &.shoppinglist {
    position: absolute;
    right: 16px;
    left: auto;
    top: 30px;
    transform: scale(0.3) translateY(-50%);
    @media screen and (min-width: ${mediaSizes.tablet}) {
      right: 32px;
      top: 49px;
      transform: scale(0.4) translateY(-50%);
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      right: 34px;
      top: 59px;
    }
  }

  &.delete-recipe {
    position: absolute;
    top: 12px;
    left: -13px;
    transform: scale(0.3) translateY(-50%);
    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 20px;
      left: -18px;
      transform: scale(0.4) translateY(-50%);
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      top: 22px;
      left: -22px;
      transform: scale(0.5) translateY(-50%);
    }
  }

  &.new-recipe {
    position: inherit;
    left: auto;
    top: auto;
    transform: scale(0.5) translateY(0);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      transform: scale(0.7) translateY(0);
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
    }
  }

  & div {
    animation: rotate 1s infinite;
    height: 50px;
    width: 50px;
    position: relative;
    left: -25px;
    top: -25px;

    &:before,
    &:after {
      content: '';
      display: block;
      height: 20px;
      width: 20px;
    }
    &:before {
      animation: box1 1s infinite;
      background-color: ${colors.color1};
      box-shadow: 30px 0 0 ${colors.color1};
      margin-bottom: 10px;
      border-radius: 4px;
    }
    &:after {
      animation: box2 1s infinite;
      background-color: ${colors.color1};
      box-shadow: 30px 0 0 ${colors.color1};
      border-radius: 4px;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg) scale(0.8);
      }
      50% {
        transform: rotate(360deg) scale(1.2);
      }
      100% {
        transform: rotate(720deg) scale(0.8);
      }
    }

    @keyframes box1 {
      0% {
        box-shadow: 30px 0 0 ${colors.color1};
      }
      50% {
        box-shadow: 0 0 0 ${colors.color1};
        margin-bottom: 0;
        transform: translate(15px, 15px);
      }
      100% {
        box-shadow: 30px 0 0 ${colors.color1};
        margin-bottom: 10px;
      }
    }

    @keyframes box2 {
      0% {
        box-shadow: 30px 0 0 ${colors.color1};
      }
      50% {
        box-shadow: 0 0 0 ${colors.color1};
        margin-top: -20px;
        transform: translate(15px, 15px);
      }
      100% {
        box-shadow: 30px 0 0 ${colors.color1};
        margin-top: 0;
      }
    }
  }
`;
