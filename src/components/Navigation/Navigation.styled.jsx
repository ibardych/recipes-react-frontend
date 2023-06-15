import styled from '@emotion/styled';
import { colors } from 'constants';
import { NavLink } from 'react-router-dom';
import { transition } from 'helpers';

export const NavigationStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 187px;
`;

export const LinkStyled = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: ${colors.color14};
  display: flex;
  align-items: center;
  ${transition('opacity')};

  &:hover {
    opacity: 0.6;
  }

  &.active {
    font-weight: 600;
    color: ${colors.color1};
  }

  & .search {
    fill: transparent;
    stroke: ${colors.color14};
    width: 24px;
    height: 24px;
  }
`;
