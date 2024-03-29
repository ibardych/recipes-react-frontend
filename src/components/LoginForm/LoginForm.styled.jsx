import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants/media';
import { container } from 'helpers';

export const LoginFormStyled = styled.div`
  ${container};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    max-width: 500px;
  }

  & .form {
    width: 100%;
    background-color: ${colors.color6};
    padding: 32px 28px 40px 28px;
    margin-top: 305px;
    border-radius: 30px;
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-top: 444px;
      padding: 44px 50px 44px 50px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      margin-top: 322px;
      margin-left: 360px;
    }
  }
`;

export const FormFields = styled.div`
  margin-bottom: 28px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    max-width: 100%;
  }
`;
