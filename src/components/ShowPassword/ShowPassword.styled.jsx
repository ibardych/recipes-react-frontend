import styled from '@emotion/styled';
import { colors } from 'constants';
import { hexToRgb } from 'helpers';
import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';

export const ShowPasswordButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  border: none;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
`;

export const ShowIcon = styled(BsFillEyeFill)`
  width: 18px;
  fill: rgba(${hexToRgb(colors.color7)}, 0.5);
`;

export const HideIcon = styled(BsFillEyeSlashFill)`
  width: 18px;
  fill: rgba(${hexToRgb(colors.color7)}, 0.5);
`;
