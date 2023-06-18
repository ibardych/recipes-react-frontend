import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { NavLink } from 'react-router-dom';

export const RecipeCardStyled = styled.div`
  padding: 14px 9px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  gap: 14px;
  position: relative;
  width: 100%;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 28px 24px;
    gap: 24px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 40px;
    padding: 40px 40px;
  }
`;

export const Image = styled(NavLink)`
  display: block;
  width: 124px;
  height: 124px;
  border-radius: 8px;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  background: url(${({ url }) => url}) no-repeat center;
  background-size: cover;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 228px;
    height: 228px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 324px;
    height: 324px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex-basis: 100%;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.24px;
  margin-bottom: 14px;
  padding-right: 30px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 24px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 50px;
  }
`;

export const Description = styled.div`
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${colors.color14};
  margin-bottom: 12px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.3;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 18px;
    margin-bottom: 30px;
    line-height: 1.4;
  }
`;

export const DeleteButton = styled.div`
  position: absolute;
  top: 14px;
  right: 9px;
  padding: 5px;
  border-radius: 4px;
  background-color: ${colors.color11};
  cursor: pointer;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    top: 28px;
    right: 24px;
    padding: 8px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    top: 40px;
    right: 40px;
    padding: 10px;
  }

  & svg {
    display: block;
    stroke: ${colors.color8};
    fill: transparent;
    width: 14px;
    height: 14px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 22px;
      height: 22px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Top = styled.div``;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Time = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: ${colors.color15};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 14px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    font-size: 16px;
  }
`;
