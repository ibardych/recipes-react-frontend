import styled from '@emotion/styled';
import { Pagination } from '@mui/material';
import { colors } from 'constants';
import { mediaSizes } from 'constants';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaginationStyled = styled(Pagination)`
  background: ${colors.color7};
  box-shadow: 0px 3px 8px -3px rgba(135, 135, 135, 0.4);
  border-radius: 26px;
  padding: 14px 10px 10px 10px;
  width: fit-content;

  .Mui-selected {
    background-color: ${colors.color11}!important;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 10px 15px;
  }
`;
