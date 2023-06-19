import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { hexToRgb } from 'helpers';

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 300;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 20px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid ${colors.color3};
  padding: 12px 16px;
  outline: none;
  background-color: #fff;
`;

export const InputWraper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 30px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }

  & input {
    width: 100%;
    height: 100%;
    color: ${colors.color7};
    border: 1px solid rgba(${hexToRgb(colors.color7)}, 0.3);
    background-color: transparent;
    border-radius: 6px;
    height: 45px;
    padding-left: 38px;
    font-size: 16px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 18px;
      height: 59px;
      padding-left: 50px;
    }

    &:focus {
      outline: none;
    }

    &:focus + label {
      color: rgba(${hexToRgb(colors.color7)}, 0.3);
    }

    &:not(:placeholder-shown) + label {
      transform: translateY(-22px);
      color: rgba(${hexToRgb(colors.color7)}, 0.5);
      left: 35px;
      padding-left: 5px;
      font-size: 12px;
      background-color: ${colors.color6};

      @media screen and (min-width: ${mediaSizes.tablet}) {
        transform: translateY(-32px);
        font-size: 14px;
        left: 47px;
      }
    }
  }

  &.error input {
    border: 1px solid ${colors.color10};
  }
  &.success input {
    border: 1px solid ${colors.color18};
  }

  & label {
    position: absolute;
    bottom: 12px;
    left: 40px;
    pointer-events: none;
    font-size: 14px;
    color: rgba(${hexToRgb(colors.color7)}, 0.8);
    transition: all 0.3s ease;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.5;
    padding-right: 5px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 18px;
      left: 52px;
      bottom: 16px;
    }
  }

  & .error {
    position: absolute;
    bottom: -18px;
    font-size: 12px;
    color: ${colors.color1};
  }

  &.error .error {
    color: ${colors.color10};
  }

  & .icon {
    position: absolute;
    top: 12px;
    left: 14px;
    stroke: #fff;
    width: 20px;
    height: 20px;
    opacity: 0.8;
    stroke-width: 1.2;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 16px;
      left: 18px;
      width: 24px;
      height: 24px;
    }
  }

  &.error .icon {
    stroke: ${colors.color10};
    opacity: 1;
  }
  &.success .icon {
    stroke: ${colors.color18};
    opacity: 1;
  }

  & .icon-error {
    position: absolute;
    top: 12px;
    right: 14px;
    fill: ${colors.color10};
    width: 20px;
    height: 20px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 16px;
      right: 18px;
      width: 24px;
      height: 24px;
    }
  }

  & .icon-success {
    position: absolute;
    top: 12px;
    right: 14px;
    fill: ${colors.color18};
    width: 20px;
    height: 20px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 16px;
      right: 18px;
      width: 24px;
      height: 24px;
    }
  }
`;
