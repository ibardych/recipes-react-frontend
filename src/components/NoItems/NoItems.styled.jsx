import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants';
import { hexToRgb } from 'helpers';

export const NoItemsStyled = styled.div`
  margin: 0 auto;
  display: block;
  font-size: 14px;
  width: 240px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  padding-top: 50px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.3;

  .theme.dark & {
    color: rgba(${hexToRgb(colors.color7)}, 0.5);
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    font-size: 20px;
    width: 440px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
  }

  & img {
    width: 100%;
    display: block;
    margin-bottom: 24px;
    width: 440px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-bottom: 32px;
      width: 350px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
    }
  }
`;
