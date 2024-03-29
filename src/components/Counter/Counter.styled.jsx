import styled from '@emotion/styled';
import { colors } from 'constants';
import { hexToRgb } from 'helpers';

export const CounterStyled = styled.div`
  border-radius: 18px;
  border: 1px solid rgba(${hexToRgb('#333333')}, 0.3);
  padding: 2px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  line-height: 1.3;

  .theme.dark & {
    border-color: rgba(${hexToRgb(colors.color7)}, 0.5);
  }
`;

export const Button = styled.button`
  padding: 4px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  & svg {
    width: 14px;
    height: 14px;
    &.minus {
      stroke: rgba(${hexToRgb('#333333')}, 0.3);

      .theme.dark & {
        stroke: rgba(${hexToRgb(colors.color7)}, 0.8);
      }
    }
    &.plus {
      stroke: ${colors.color1};
    }
  }
`;
