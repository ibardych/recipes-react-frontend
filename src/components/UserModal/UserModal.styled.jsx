import styled from '@emotion/styled';
import { colors } from 'constants';

export const UserModalStyled = styled.div``;

export const AddImage = styled.div`
  width: 88px;
  height: 88px;
  margin: 0 auto;
  border-radius: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  background: url(${({ image }) => image}) no-repeat center ${colors.color17};
  background-size: cover;
  position: relative;

  & .icon {
    position: absolute;
    bottom: -5px;
    right: 30px;
    width: 24px;
    height: 24px;
    fill: transparent;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  padding-top: 20px;
  margin-bottom: 20px;
  min-height: 44px;
`;
