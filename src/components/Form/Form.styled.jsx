import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants/media';
import { NavLink } from 'react-router-dom';

export const Caption = styled.h1`
  margin-top: 0;
  margin-bottom: 18px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${colors.color7};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    text-align: left;
    margin-bottom: 50px;
    font-size: 28px;
  }
`;

export const Label = styled.span`
  position: relative;
  margin: 0;
  margin-right: auto;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: ${colors.color2};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: row;
    gap: 32px;
  }

  & .button {
    height: 45px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      height: 56px;
    }
  }
`;

export const BottomLink = styled(NavLink)`
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.color7};
  margin-top: 18px;
  text-decoration: underline;
  font-weight: 400;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    position: relative;
    left: 183px;
  }
`;
