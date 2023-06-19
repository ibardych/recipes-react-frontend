import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { container } from 'helpers';

export const PageContainer = styled.div`
  ${({ type }) => (type === 'full' ? '' : container)};
  padding-top: 30px;
  z-index: 1;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-top: 53px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    padding-top: 81px;
  }
`;
