import { HomeStyled } from 'components/Styled/HomePage.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/selectors';
import logo from 'images/logo.svg';
import { Button } from 'components/Styled';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const toRegisterPage = () => {
    const path = '/register';
    navigate(path);
  };
  const toSigninPage = () => {
    const path = '/signin';
    navigate(path);
  };

  return (
    <>
      <HomeStyled isLoggedIn={isLoggedIn}>
        <div className="wrapper">
          <img src={logo} alt="logo" />
          <h1>Welcome to the app!</h1>
          <p>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </p>
          <div className="buttons">
            <Button onClick={toRegisterPage}>Registration</Button>
            <Button onClick={toSigninPage} className="type1">
              Sign In
            </Button>
          </div>
        </div>
      </HomeStyled>
    </>
  );
};

export default Home;
