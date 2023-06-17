import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants';

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
  }
`;

export const PreparationSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;
`;

export const Step = styled.div`
  display: flex;
  gap: 14px;
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);

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
  }
`;
