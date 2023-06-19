import styled from '@emotion/styled';
import { Pagination } from '@mui/material';
import { colors } from 'constants';
import { mediaSizes } from 'constants';
import { hexToRgb } from 'helpers';

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

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding: 10px 15px;
  }

  .theme.dark & {
    background-color: ${colors.color6};
    box-shadow: none;
  }

  .Mui-selected {
    background-color: ${colors.color11}!important;

    .theme.dark & {
      background-color: ${colors.color1}!important;
      color: ${colors.color7}!important;
    }
  }

  .MuiPaginationItem-text {
    .theme.dark & {
      color: rgba(${hexToRgb(colors.color7)}, 0.7) !important;
    }
  }
`;
