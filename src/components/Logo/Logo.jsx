import { ReactComponent as LogoIcon } from 'images/logo.svg';
import { LinkStyled } from './Logo.styled';

export const Logo = () => {
  return (
    <LinkStyled className="logo" to="/main">
      <LogoIcon />
    </LinkStyled>
  );
};
