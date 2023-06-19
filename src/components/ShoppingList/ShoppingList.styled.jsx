import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { hexToRgb } from 'helpers';

export const ShoppingListStyled = styled.div``;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 14px;
  background-color: ${colors.color1};
  border-radius: 8px;
  color: ${colors.color7};
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  margin-bottom: 24px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 21px 32px;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 21px 40px;
    margin-bottom: 50px;
  }

  & div {
    display: flex;
    gap: 18px;
    align-items: center;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      gap: 38px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      gap: 110px;
    }
  }
`;

export const IngredientList = styled.div`
  margin-bottom: 50px;
  min-height: 200px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  &.no-items {
    min-height: 0px;
  }
`;

export const Ingredient = styled.div`
  padding: 0px 26px 24px 0px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;

  .theme.dark & {
    border-color: rgba(${hexToRgb(colors.color7)}, 0.15);
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 0px 54px 34px 0px;
    margin-bottom: 34px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }

  & .delete {
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      width: 20px;
      height: 20px;
      stroke: #333333;
      stroke-width: 1.7;

      .theme.dark & {
        stroke: rgba(${hexToRgb(colors.color7)}, 1);
      }

      @media screen and (min-width: ${mediaSizes.tablet}) {
        width: 26px;
        height: 26px;
        stroke-width: 2;
      }
      @media screen and (min-width: ${mediaSizes.desktop}) {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export const ImageName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-basis: 100%;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 24px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const Image = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${colors.color11};
  border-radius: 6px;
  background: url(${({ url }) => url}) no-repeat center ${colors.color11};
  background-size: 48px 48px;

  .theme.dark & {
    background: url(${({ url }) => url}) no-repeat center
      rgba(${hexToRgb(colors.color6)}, 1);
    background-size: 48px 48px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 100px;
    height: 100px;
    background-size: 88px 88px;
    .theme.dark & {
      background-size: 88px 88px;
    }
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding: 12px;
    width: 120px;
    height: 120px;
    background-size: 96px 96px;
    .theme.dark & {
      background-size: 96px 96px;
    }
  }
`;

export const Name = styled.div`
  color: ${colors.color15};
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.24px;

  .theme.dark & {
    color: rgba(${hexToRgb(colors.color7)}, 1);
    background-size: 48px 48px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 20px;
    line-height: 1;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const Measure = styled.div`
  background-color: ${colors.color1};
  color: ${colors.color7};
  padding: 4px 6px;
  border-radius: 4px;
  flex-shrink: 0;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  margin-right: 8px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 5px 12px;
    font-size: 18px;
    line-height: 27px;
    margin-right: 48px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-right: 132px;
  }
`;
