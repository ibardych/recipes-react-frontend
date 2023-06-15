import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  cursor: pointer;
  width: 40px;
  height: 40px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 44px;
    height: 44px;
  }

  &:hover {
  }

  &.active {
  }

  & svg {
    width: 40px;
    height: 40px;
    display: inline-block;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 44px;
      height: 44px;
    }
  }
`;
