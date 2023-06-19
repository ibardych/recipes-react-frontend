import {
  LoaderContainer,
  LoaderSmallStyled,
  LoaderStyled,
} from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <LoaderContainer>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </LoaderContainer>
    </LoaderStyled>
  );
};

export const LoaderSmall = ({ scale, name, top = '0px', left = '50%' }) => {
  return (
    <LoaderSmallStyled className={name} scale={scale} top={top} left={left}>
      <div></div>
    </LoaderSmallStyled>
  );
};
