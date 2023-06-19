import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';

export const DecoStyled = styled.div`
  pointer-events: none;

  & .deco1 {
    width: 10px;
    height: 10px;
    background-color: ${colors.color1};
    border-radius: 2px;
    position: absolute;
    top: 90px;
    left: 30%;
    transform: rotate(12deg);
    z-index: 0;
  }

  & .deco2 {
    width: 9px;
    height: 9px;
    background-color: #8f8f8f;
    border-radius: 2px;
    position: absolute;
    top: 160px;
    left: 50%;
    transform: rotate(-22deg);
    z-index: 0;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 170px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      top: 200px;
    }
  }

  & .deco3 {
    width: 10px;
    height: 10px;
    background-color: ${colors.color1};
    border-radius: 2px;
    position: absolute;
    top: 120px;
    left: 70%;
    transform: rotate(32deg);
    z-index: 0;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: 150px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      top: 160px;
    }
  }
`;
