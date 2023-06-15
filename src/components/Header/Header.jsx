import { HeaderStyled, MenuButton, HeaderContainer } from './Header.styled';

import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import { useState, useEffect, useCallback } from 'react';
import { mediaSizes } from 'constants/media';
import { Logo } from 'components/Logo/Logo';
import Sprite from 'images/sprite.svg';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';

const Header = () => {
  const [desktop, setDesktop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const clickHandler = useCallback(() => {
    setIsMobileMenuOpen(state => !state);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY <= 1;
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < parseInt(mediaSizes.desktop)) {
        setDesktop(false);
      } else {
        setDesktop(true);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <HeaderStyled className={`${isScrolled ? 'shadow' : ''}`}>
        <HeaderContainer>
          <Logo />
          {desktop && <Navigation />}
          <UserInfo />
          <ThemeToggler />
          {!desktop && (
            <MenuButton onClick={clickHandler}>
              <svg className="burger">
                <use href={`${Sprite}#icon-burger`}></use>
              </svg>
            </MenuButton>
          )}
        </HeaderContainer>
      </HeaderStyled>

      {isMobileMenuOpen && !desktop && (
        <MobileMenu handleClick={clickHandler} />
      )}
    </>
  );
};

export default Header;
