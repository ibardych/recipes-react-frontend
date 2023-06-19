import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthPageStyled } from 'components/Styled/AuthPage.styled';
import BackgroundImage from 'images/AuthPage/auth-page-bg@2x.png';

const LoginPage = () => {
  return (
    <AuthPageStyled>
      <img className="bg" src={BackgroundImage} alt="bg" />
      <LoginForm />
    </AuthPageStyled>
  );
};

export default LoginPage;
