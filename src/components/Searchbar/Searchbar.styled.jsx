import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { transition } from 'helpers';

export const SearchbarStyled = styled.div`
  width: 295px;
  margin: 0 auto;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 369px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 510px;
  }
`;

export const FormStyled = styled.form`
  position: relative;
`;

export const Input = styled.input`
  border-radius: 24px 44px;
  border: 1px solid ${colors.color12};
  outline: none;
  padding: 17px 126px 17px 32px;
  font-size: 12px;
  line-height: 1.5;
  width: 100%;
  background-color: #fff;
  color: ${colors.color14};
  box-shadow: 0px 4px 97px rgba(34, 37, 42, 0.03);
  ${transition('width', 'border-bottom')}

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 18px 170px 18px 38px;
    font-size: 16px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 23px 170px 23px 48px;
    font-size: 16px;
  }

  &::placeholder {
    color: ${colors.color13};
  }

  .theme.dark & {
    background-color: ${colors.color6};
    border: 1px solid rgba(250, 250, 250, 0.2);
    color: rgba(250, 250, 250, 0.5);
  }

  /* &:not(:placeholder-shown),
  &:focus {
    width: 360px;
    border-bottom: 1px solid ${colors.color1};
  } */
`;

export const Button = styled.button`
  border-radius: 24px 44px;
  position: absolute;
  right: -1px;
  top: 0px;
  height: 100%;
  border: 0;
  outline: none;
  color: ${colors.color7};
  font-size: 14px;
  background-color: ${colors.color8};
  padding: 0 32px;
  cursor: pointer;
  ${transition('background-color')}

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 0 52px;
    font-size: 16px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  &:hover {
    background-color: ${colors.color1};
  }

  .theme.dark & {
    background-color: ${colors.color1};
    &:hover {
      background-color: ${colors.color8};
    }
  }
`;
