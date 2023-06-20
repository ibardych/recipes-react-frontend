import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { colors } from 'constants';
import { transition } from 'helpers';

export const UserInfoStyled = styled.div`
  position: relative;
  margin-left: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 5px 25px 5px 5px;
    border-radius: 100px;
    margin-right: 50px;
    cursor: pointer;
    ${transition('background-color')};

    &:hover {
      background-color: rgba(0, 0, 0, 0.02);

      .theme.dark & {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }

  & img {
    width: 34px;
    height: 34px;
    border-radius: 50px;
  }
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.7;
  color: ${colors.color8};

  .theme.dark & {
    color: ${colors.color7};

    @media screen and (min-width: ${mediaSizes.desktop}) {
      color: ${({ location, isScrolled }) =>
        location === '/main' && !isScrolled ? colors.color8 : colors.color7};
    }
  }
`;

export const Popup = styled.div`
  position: absolute;
  top: 50px;
  left: 17px;
  width: 182px;
  background-color: ${colors.color7};
  padding: 18px;
  border: 1px solid ${colors.color1};
  border-radius: 8px;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
  transform: translateX(-50%);

  .theme.dark & {
    background-color: ${colors.color9};
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 182px;
  }

  & span {
    display: block;
    margin-bottom: 28px;
    font-size: 14px;
    line-height: 1.6;
    font-weight: 500;

    .theme.dark & {
      color: ${colors.color7};
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-bottom: 32px;
    }
  }

  & .edit {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 16px;
    right: 17px;
    cursor: pointer;
    ${transition('background-color')};
    padding: 5px;
    border-radius: 20px;

    & svg {
      width: 14px;
      height: 14px;
      stroke: ${colors.color14};
      fill: transparent;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);

      .theme.dark & {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }

  & .logout {
    font-size: 14px;
    padding: 12px 27px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      padding: 12px 35px;
    }
  }
`;
