import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { container } from 'helpers';

export const CategoriesPreviewStyled = styled.div`
  ${container};
  position: relative;

  & .other-button-wrapper {
    display: flex;
    justify-content: center;
  }
`;

export const CategoryStyled = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    margin-bottom: 100px;
  }

  &.last {
    margin-bottom: 40px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-bottom: 32px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      margin-bottom: 14px;
    }
  }

  & .slider {
    margin-bottom: 24px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-bottom: 40px;
    }
  }

  & button.all {
    margin-left: auto;
  }
`;

export const CategoryTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${colors.color16};
  margin-bottom: 32px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 44px;
    margin-bottom: 40px;
  }
`;
