import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, SharedLayoutStyled } from './SharedLayout.styled';
import { Button } from 'components/Styled';
import { BiUpArrow } from 'react-icons/bi';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoggedIn } from 'redux/user/selectors';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <SharedLayoutStyled>
      <Container>
        {isLoggedIn && <Header />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      {isLoggedIn && <Footer />}
      {isVisible && (
        <Button type="button" className="icon totop" onClick={scrollToTop}>
          <BiUpArrow />
        </Button>
      )}
    </SharedLayoutStyled>
  );
};

export default SharedLayout;
