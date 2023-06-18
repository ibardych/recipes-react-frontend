import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { NavLink } from 'react-router-dom';

export const RecipePreviewStyled = styled(NavLink)`
  display: flex;
  gap: 12px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    padding-bottom: 0px;
    margin-bottom: 0px;
    border-bottom: none;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-basis: calc((100% - 1 * 32px) / 2);

    &:last-child {
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    flex-basis: 100%;

    &:last-child {
      padding-bottom: 0px;
      margin-bottom: 0px;
      border-bottom: none;
    }
  }
`;

export const Image = styled.div`
  display: block;
  width: 104px;
  height: 104px;
  border-radius: 8px;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  background: url(${({ url }) => url}) no-repeat center;
  background-size: cover;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 97px;
    height: 97px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  margin-bottom: 5px;
  color: ${colors.color15};

  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;

export const Description = styled.div`
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: #3e4462;

  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;
