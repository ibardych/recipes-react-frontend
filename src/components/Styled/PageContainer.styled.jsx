import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { container } from 'helpers';

export const PageContainer = styled.div`
  ${container};
  padding-top: 30px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-top: 53px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-top: 81px;
  }
`;
