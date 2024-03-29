import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants';
import { container, hexToRgb } from 'helpers';

export const RecipeFullStyled = styled.div`
  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  & .recipe-image {
    border-radius: 8px;
    width: 100%;
    display: block;
    margin-bottom: 100px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 30%;
    }
  }
`;

export const RecipeBody = styled.div`
  ${container};
`;

export const PreparationSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;
  width: 100%;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 20px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 22px;
  }
`;

export const Step = styled.div`
  display: flex;
  gap: 14px;
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);

  .theme.dark & {
    color: rgba(${hexToRgb(colors.color7)}, 1);
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 14px;
    line-height: 1.3;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 16px;
    line-height: 1.4;
  }

  & .number {
    width: 21px;
    height: 21px;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.color1};
    flex-shrink: 0;
    flex-grow: 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.5;
    color: #fff;
    position: relative;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: -2px;
      width: 24px;
      height: 24px;
      font-size: 14px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      top: -3px;
      width: 30px;
      height: 30px;
      font-size: 16px;
    }
  }
`;

export const Preparation = styled.div`
  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    display: flex;
    gap: 100px;
    align-items: flex-start;
  }
`;
