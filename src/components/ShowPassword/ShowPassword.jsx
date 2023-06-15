import {
  ShowPasswordButton,
  ShowIcon,
  HideIcon,
} from './ShowPassword.styled.jsx';

const ShowPassword = ({ isShown, clickHandler }) => {
  return (
    <ShowPasswordButton type="button" onClick={clickHandler}>
      {isShown ? <HideIcon /> : <ShowIcon />}
    </ShowPasswordButton>
  );
};

export default ShowPassword;
