import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants';
import { hexToRgb } from 'helpers';

export const PageTitle = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${colors.color16};
  margin-bottom: 50px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  .theme.dark & {
    color: ${colors.color7};
  }
`;

export const PageSubTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${colors.color15};
  margin-bottom: 28px;

  .theme.dark & {
    color: rgba(${hexToRgb(colors.color7)}, 1);
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }
`;
