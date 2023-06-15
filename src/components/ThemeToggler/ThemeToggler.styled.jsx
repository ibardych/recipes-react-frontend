import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const Toggler = styled.button`
  border: none;
  background: #efefef;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  width: 61px;
  height: 27px;
  cursor: pointer;
  border-radius: 50px;
  position: relative;
  ${transition('transform', 'background')};

  &.dark {
    background: ${colors.color1};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    left: 3px;
    width: 21px;
    height: 21px;
    border-radius: 50px;
    background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
    box-shadow: 2px 1px 6px 0px rgba(0, 0, 0, 0.25);
    ${transition('transform', 'background')};
  }

  &.dark::after {
    transform: translateX(34px);
  }
`;
