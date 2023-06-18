import styled from '@emotion/styled';
import { mediaSizes } from 'constants';

export const SearchResultsStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 28px;
  margin-bottom: 40px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    gap: 32px;
    flex-direction: row;
    margin-bottom: 50px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    gap: 50px 24px;
    margin-bottom: 60px;
  }

  & a {
    width: 100%;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      flex-basis: calc((100% - (1 * 32px)) / 2);
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      flex-basis: calc((100% - (3 * 24px)) / 4);
    }
  }
`;
