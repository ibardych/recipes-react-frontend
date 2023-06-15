import {
  LoaderContainer,
  LoaderSmallStyled,
  LoaderStyled,
  Img,
  StyledTriangle,
} from './Loader.styled';
import Logo from 'images/logo.svg';

export const Loader = () => {
  return (
    <LoaderStyled>
      <LoaderContainer>
        <StyledTriangle
          height="100"
          width="100"
          color="#8BAA36"
          ariaLabel="triangle-loading"
          visible={true}
        />

        <Img src={Logo} alt="Logo" />
      </LoaderContainer>
    </LoaderStyled>
  );
};

export const LoaderSmall = ({ name }) => {
  return <LoaderSmallStyled className={name} />;
};
