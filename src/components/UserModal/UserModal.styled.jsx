import styled from '@emotion/styled';
import { colors } from 'constants';
import { hexToRgb } from 'helpers';

export const UserModalStyled = styled.div`
  & .button {
    height: 59px;
  }
`;

export const AddImage = styled.div`
  width: 188px;
  height: 188px;
  margin: 0 auto;
  border-radius: 188px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  background: url(${({ image }) => image}) no-repeat center ${colors.color17};
  background-size: cover;
  position: relative;

  & .icon {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 36px;
    height: 36px;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;

  & input {
    display: block;
    width: 100%;
    height: 60px;
    border: 1px solid rgba(${hexToRgb(colors.color14)}, 0.3);
    border-radius: 6px;
    padding: 16px 51px 16px 51px;

    .theme.dark & {
      background-color: transparent;
      border: 1px solid rgba(${hexToRgb(colors.color7)}, 0.3);
      color: rgba(${hexToRgb(colors.color7)}, 0.7);
    }
  }

  & .icon-user {
    fill: transparent;
    stroke: rgba(${hexToRgb(colors.color14)}, 0.8);
    width: 24px;
    height: 24px;
    position: absolute;
    top: 16px;
    left: 19px;
    stroke-width: 1.7;

    .theme.dark & {
      stroke: rgba(${hexToRgb(colors.color7)}, 0.7);
    }
  }

  & .icon-edit {
    fill: transparent;
    stroke: rgba(${hexToRgb(colors.color14)}, 0.8);
    width: 24px;
    height: 24px;
    position: absolute;
    top: 16px;
    right: 19px;

    .theme.dark & {
      stroke: rgba(${hexToRgb(colors.color7)}, 0.7);
    }
  }
`;
