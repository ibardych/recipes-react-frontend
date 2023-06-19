import Modal from 'components/Modal/Modal';
import {
  ButtonsContainer,
  LogoutModalStyled,
  Text,
} from './LogoutModal.styled';
import { Button } from 'components/Styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { setModalClosing, toggleModal } from 'redux/general/slice';

const LogoutModal = ({ handleClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut()).then(() => {});
  };

  const closeModal = () => {
    dispatch(setModalClosing());
    setTimeout(() => {
      dispatch(toggleModal());
      handleClose();
    }, 200);
  };

  return (
    <Modal handleClose={handleClose}>
      <LogoutModalStyled>
        <Text>Are you sure you want to log out?</Text>
        <ButtonsContainer>
          <Button className="type2 button" type="submit" onClick={handleLogout}>
            Log out
          </Button>
          <Button
            className="type2 grey button"
            type="submit"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </ButtonsContainer>
      </LogoutModalStyled>
    </Modal>
  );
};

export default LogoutModal;
