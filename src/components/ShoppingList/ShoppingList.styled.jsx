import styled from '@emotion/styled';
import { colors } from 'constants';

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
`;

export const IngredientList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;
`;

export const Ingredient = styled.div`
  padding: 10px;
  background-color: ${colors.color11};
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 20px;

  & img {
    width: 50px;
    height: auto;
  }
`;
