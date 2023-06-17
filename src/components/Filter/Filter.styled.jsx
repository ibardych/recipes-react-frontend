import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { hexToRgb } from 'helpers';

export const FilterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 24px;
  margin-bottom: 42px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${colors.color16};

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Active = styled.div`
  width: 146px;
  padding: 8px 14px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.5);
  background-color: rgba(${hexToRgb(colors.color17)}, 0.157);
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 1;
  width: 146px;
  top: 36px;
  background-color: ${colors.color7};
  padding: 8px 14px;
  border-radius: 0px 0px 6px 6px;
  box-shadow: 0px 2px 3.5px -2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.div`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.5);
`;
