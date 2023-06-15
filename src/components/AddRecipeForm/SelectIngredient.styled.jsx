import styled from '@emotion/styled';
import { colors } from 'constants';
import { hexToRgb } from 'helpers';

export const SelectIngredientStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  & input {
    border: none;
    outline: none;
    background-color: rgba(${hexToRgb(colors.color17)}, 0.157);
    border-radius: 6px;
    padding: 16px;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: rgba(${hexToRgb('#000000')}, 0.5);

    &.ingredient {
      width: 194px;
    }
    &.measure {
      width: 100%;
    }
  }

  & svg.delete {
    width: 18px;
    height: 18px;
    stroke: #333;
    fill: transparent;
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;

  & .selected {
    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
  }

  & svg.arrow-down {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 18px;
    height: 18px;
    stroke: ${colors.color1};
    fill: transparent;
    transform: translateY(-50%);
  }

  & .select {
    position: absolute;
    top: 52px;
    left: 0px;
    width: 100%;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.03);
    overflow-y: auto;
    padding: 8px 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(${hexToRgb('#000000')}, 0.5);
    z-index: 1;
    text-align: center;

    & .active {
      color: ${colors.color1};
    }
  }
`;
