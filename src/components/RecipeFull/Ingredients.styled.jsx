import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import checkIcon from 'images/check.svg';

export const IngredientsStyled = styled.div``;

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
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const Ingredient = styled.div`
  padding: 10px 37px 10px 10px;
  background-color: ${colors.color11};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 16px 58px 16px 24px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
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
  width: 57px;
  height: 57px;
  height: auto;
  background: url(${({ url }) => url}) no-repeat center;
  background-size: cover;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 144px;
    height: 144px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const Name = styled.div`
  color: ${colors.color15};
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.24px;

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
  text-align: right;
  max-width: 90px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 5px 12px;
    font-size: 16px;
    line-height: 27px;
    margin-right: 48px;
    max-width: 180px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-right: 132px;
    font-size: 18px;
    max-width: 100%;
  }
`;

export const Checkbox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 4px;

  &.disabled {
    /* opacity: 0.9; */
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 35px;
    height: 35px;
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  &.checked {
    background: url(${checkIcon}) no-repeat center;
    background-size: 10px 10px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      background-size: 20px 20px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
    }
  }
`;
