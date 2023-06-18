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
