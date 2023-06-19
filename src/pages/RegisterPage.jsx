import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AuthPageStyled } from 'components/Styled/AuthPage.styled';
import BgImage from 'images/AuthPage/auth-page-bg@2x.png';
import BgImageDesktop from 'images/AuthPage/auth-page-bg-desktop@2x.png';
import { useSelector } from 'react-redux';
import { selectDeviceType } from 'redux/general/selectors';

const Register = () => {
  const deviceType = useSelector(selectDeviceType);

  return (
    <AuthPageStyled>
      <img
        className="bg"
        src={deviceType === 'desktop' ? BgImageDesktop : BgImage}
        alt="bg"
      />
      <RegisterForm />
    </AuthPageStyled>
  );
};

export default Register;
