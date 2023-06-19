import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { container, hexToRgb, transition } from 'helpers';
import { colors } from 'constants/colors';

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;

  ${transition('box-shadow', 'background-color')};

  &.shadow {
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.05);
    background-color: rgba(${hexToRgb(colors.color7)}, 0.8);
    backdrop-filter: blur(7px);

    .theme.dark & {
      box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.7);
      background-color: rgba(${hexToRgb(colors.color9)}, 0.6);
    }
  }

  & .theme-toggler {
    display: none;

    @media screen and (min-width: ${mediaSizes.desktop}) {
      display: block;
    }
  }
`;

export const HeaderContainer = styled.div`
  ${container}
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 21px;
  padding-bottom: 21px;
  justify-content: space-between;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-top: 19px;
    padding-bottom: 19px;
  }
`;

export const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;

  & .burger {
    stroke: ${colors.color8};
    stroke-width: 2px;
    width: 28px;
    height: 28px;
    cursor: pointer;
    ${transition('stroke')};

    .theme.dark & {
      stroke: ${colors.color7};
    }
  }
`;

export const Icon = styled.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 14px;
    height: 14px;
    z-index: 10;
  }
`;
