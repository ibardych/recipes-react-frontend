import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AuthPageStyled } from 'components/Styled/AuthPage.styled';
import BackgroundImage from 'images/AuthPage/auth-page-bg@2x.png';

const Register = () => {
  return (
    <AuthPageStyled>
      <img className="bg" src={BackgroundImage} alt="bg" />
      <RegisterForm />
    </AuthPageStyled>
  );
};

export default Register;
