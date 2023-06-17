import styled from '@emotion/styled';
import { colors } from 'constants';
import { container, containerr } from 'helpers';

export const RecipeHeaderStyled = styled.div`
  ${containerr};
  margin-top: -112px;
  padding-top: 144px;
  margin-bottom: 32px;
  background-color: #f5f5f5;

  & button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const RecipeTitle = styled.h1`
  ${container};
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${colors.color1};
  margin-bottom: 18px;
`;

export const RecipeDescription = styled.div`
  ${container};
  text-align: center;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${colors.color8};
  margin-bottom: 24px;
`;

export const RecipeTime = styled.div`
  text-align: center;
  margin-top: 42px;
  padding-bottom: 90px;
`;
