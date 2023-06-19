import { useState } from 'react';
import { UserInfoStyled, Span, Wrapper, Popup } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectUser } from 'redux/user/selectors';
import { Button } from 'components/Styled';
import Sprite from 'images/sprite.svg';
import { selectModalOpened } from 'redux/general/selectors';
import { setModalOpened, toggleModal } from 'redux/general/slice';
import UserModal from 'components/UserModal/UserModal';
import BACKEND_URL from 'constants/backend.url';
import LogoutModal from 'components/LogoutModal/LogoutModal';
import { useLocation } from 'react-router-dom';

const UserInfo = ({ isScrolled }) => {
  const user = useSelector(selectUser);
  const userName = user.username;
  const dispatch = useDispatch();
  const [popupOpened, setPopupOpened] = useState(false);
  const modalOpened = useSelector(selectModalOpened);
  const [userModal, setUserModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const location = useLocation();

  const toggleUserPopup = () => {
    setPopupOpened(!popupOpened);
  };

  const openUserModal = () => {
    dispatch(toggleModal());
    setUserModal(true);
    setPopupOpened(false);
  };

  const openLogoutModal = () => {
    dispatch(toggleModal());
    setLogoutModal(true);
    setPopupOpened(false);
  };

  const closeUserModal = () => {
    setUserModal(false);
  };

  const closeLogoutModal = () => {
    setLogoutModal(false);
    dispatch(setModalOpened(false));
  };

  return (
    <UserInfoStyled>
      <Wrapper onClick={toggleUserPopup}>
        <img
          width="50"
          src={`${user.gravatar ? `` : `${BACKEND_URL}/`}${user.avatarURL}`}
          alt="avatar"
        />
        <Span location={location.pathname} isScrolled={isScrolled}>
          {userName}
        </Span>
      </Wrapper>
      {popupOpened && (
        <Popup>
          <span>Edit profile</span>
          <svg className="edit" onClick={openUserModal}>
            <use href={`${Sprite}#icon-edit`}></use>
          </svg>
          <Button type="button" className="logout" onClick={openLogoutModal}>
            Log out
            <svg className="icon">
              <use href={`${Sprite}#icon-arrow-right`}></use>
            </svg>
          </Button>
        </Popup>
      )}
      {modalOpened && userModal && <UserModal handleClose={closeUserModal} />}
      {modalOpened && logoutModal && (
        <LogoutModal handleClose={closeLogoutModal} />
      )}
    </UserInfoStyled>
  );
};

export default UserInfo;
