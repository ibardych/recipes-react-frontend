import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants';
import { hexToRgb } from 'helpers';

export const NotFoundStyled = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 104px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  & img {
    width: 259px;
    display: block;
    margin-bottom: 14px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 498px;
      margin-bottom: 32px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
    }
  }

  & div {
    width: 206px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      gap: 14px;
      width: 480px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
    }
  }

  & strong {
    font-weight: 600;
    font-size: 18px;
    color: #000000;

    .theme.dark & {
      color: rgba(${hexToRgb(colors.color7)}, 1);
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 24px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
    }
  }

  & span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.3;

    .theme.dark & {
      color: rgba(${hexToRgb(colors.color7)}, 0.5);
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 18px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
    }
  }
`;
