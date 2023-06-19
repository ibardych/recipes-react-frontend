import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { hexToRgb } from 'helpers';
import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';

export const ShowPasswordButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 7px;
  border: none;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    bottom: 10px;
    right: 12px;
  }
`;

export const ShowIcon = styled(BsFillEyeFill)`
  width: 18px;
  height: 18px;
  fill: rgba(${hexToRgb(colors.color7)}, 0.5);

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 20px;
    height: 20px;
  }
`;

export const HideIcon = styled(BsFillEyeSlashFill)`
  width: 18px;
  fill: rgba(${hexToRgb(colors.color7)}, 0.5);

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 20px;
    height: 20px;
  }
`;
