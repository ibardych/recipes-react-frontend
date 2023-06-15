import styled from '@emotion/styled';
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
    }
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
  }

  & .error {
    position: absolute;
    bottom: -18px;
    font-size: 12px;
    color: ${colors.color1};
    font-weight: 500;
  }

  & .icon {
    position: absolute;
    top: 12px;
    left: 14px;
    stroke: #fff;
    width: 20px;
    height: 20px;
    opacity: 0.8;
  }
`;

export const ErrorBloodType = styled.div`
  position: absolute;
  top: 50px;
  font-size: 12px;
  color: ${colors.color1};
`;

export const LabelInfo = styled.span``;
