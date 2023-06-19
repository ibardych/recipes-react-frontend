import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { hexToRgb, transition } from 'helpers';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  font-size: 14px;
  line-height: 1.5;
  padding: 12px 24px;
  color: #fff;
  border: none;
  background: ${colors.color1};
  border-radius: 24px 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  ${transition('background-color', 'color', 'border')}

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 22px 44px;
    font-size: 16px;
  }

  &:hover {
    /* animation: jelly 0.5s; */
    background: ${colors.color8};
  }

  &:focus {
    background: ${colors.color1};
  }

  & .icon {
    stroke: #fff;
    fill: transparent;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  &.type1 {
    color: ${colors.color7};
    border: 2px solid ${colors.color7};
    background: transparent;

    &:hover {
      color: ${colors.color1};
      border: 2px solid ${colors.color1};
    }
    &:focus {
      background: transparent;
    }
  }

  &.type2 {
    border-radius: 6px;
    width: 100%;
    font-size: 16px;
    margin-top: 0px;
  }

  &.type3 {
    border-radius: 6px;
    font-size: 14px;
    margin-top: 0px;
    padding: 10px 24px;
  }

  &.type4 {
    color: ${colors.color8};
    border: 2px solid ${colors.color1};
    background: transparent;
    padding: 14px 32px;

    .theme.dark & {
      color: ${colors.color7};
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      padding: 20px 52px;
    }

    &:hover {
      color: ${colors.color1};
      border: 2px solid ${colors.color1};
    }
    &:focus {
      background: transparent;
    }
  }

  &.type5 {
    color: ${colors.color7};
    background: ${colors.color8};

    .theme.dark & {
      background-color: rgba(${hexToRgb(colors.color1)}, 1);
    }

    &:hover {
      background: ${colors.color1};
    }
    &:focus {
      background: ${colors.color8};
    }
  }

  &.type6 {
    color: ${colors.color7};
    background: ${colors.color8};
    padding: 6px 14px;
    font-size: 10px;
    line-height: 1.5;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 14px;
      padding: 12px 32px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 16px;
      padding: 14px 38px;
    }

    &:hover {
      background: ${colors.color1};
    }
    &:focus {
      background: ${colors.color8};
    }
  }

  &.grey {
    background-color: #d9d9d9;
    color: ${colors.color14};

    &:focus {
      background: #d9d9d9;
    }
  }

  &.totop {
    position: fixed;
    z-index: 3;
    bottom: 30px;
    right: 30px;
    border-radius: 50px;
    font-size: 26px;
    width: 50px;
    height: 50px;
    padding: 0;
    box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.4);

    & svg {
      position: relative;
      bottom: 1px;
    }

    &::before,
    &::after {
      display: none;
    }
  }

  @keyframes jelly {
    25% {
      transform: scale(0.9, 1.1);
    }

    50% {
      transform: scale(1.1, 0.9);
    }

    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;

export const ButtonLink = styled(NavLink)`
  font-size: 14px;
  line-height: 1.5;
  padding: 12px 24px;
  color: #fff;
  border: none;
  background: ${colors.color1};
  border-radius: 24px 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  ${transition('background-color', 'color', 'border')}

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 22px 44px;
    font-size: 16px;
  }

  &:hover {
    /* animation: jelly 0.5s; */
    background: ${colors.color8};
  }

  &:focus {
    background: ${colors.color1};
  }

  & .icon {
    stroke: #fff;
    fill: transparent;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  &.type1 {
    color: ${colors.color7};
    border: 2px solid ${colors.color7};
    background: transparent;

    &:hover {
      color: ${colors.color1};
      border: 2px solid ${colors.color1};
    }
    &:focus {
      background: transparent;
    }
  }

  &.type2 {
    border-radius: 6px;
    width: 100%;
    font-size: 16px;
    margin-top: 0px;
  }

  &.type3 {
    border-radius: 6px;
    font-size: 14px;
    margin-top: 0px;
    padding: 10px 24px;
  }

  &.type4 {
    color: ${colors.color8};
    border: 2px solid ${colors.color1};
    background: transparent;
    padding: 14px 32px;

    .theme.dark & {
      color: ${colors.color7};
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      padding: 20px 52px;
    }

    &:hover {
      color: ${colors.color1};
      border: 2px solid ${colors.color1};
    }
    &:focus {
      background: transparent;
    }
  }

  &.type5 {
    color: ${colors.color7};
    background: ${colors.color8};

    &:hover {
      background: ${colors.color1};
    }
    &:focus {
      background: ${colors.color8};
    }
  }

  &.type6 {
    color: ${colors.color7};
    background: ${colors.color8};
    padding: 6px 14px;
    font-size: 10px;
    line-height: 1.5;

    .theme.dark & {
      background-color: rgba(${hexToRgb(colors.color1)}, 1);
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 14px;
      padding: 12px 32px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 16px;
      padding: 14px 38px;
    }

    &:hover {
      background: ${colors.color1};

      .theme.dark & {
        background-color: rgba(${hexToRgb(colors.color8)}, 1);
      }
    }
    &:focus {
      background: ${colors.color8};

      .theme.dark & {
        background-color: rgba(${hexToRgb(colors.color1)}, 1);
      }
    }
  }

  &.grey {
    background-color: #d9d9d9;
    color: ${colors.color14};

    &:focus {
      background: #d9d9d9;
    }
  }

  &.totop {
    position: fixed;
    z-index: 3;
    bottom: 30px;
    right: 30px;
    border-radius: 50px;
    font-size: 26px;
    width: 50px;
    height: 50px;
    padding: 0;

    & svg {
      position: relative;
      bottom: 1px;
    }

    &::before,
    &::after {
      display: none;
    }
  }

  @keyframes jelly {
    25% {
      transform: scale(0.9, 1.1);
    }

    50% {
      transform: scale(1.1, 0.9);
    }

    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;
