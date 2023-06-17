import { useState } from 'react';
import { UserInfoStyled, Span, Wrapper, Popup } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { selectUser } from 'redux/user/selectors';
import { Button } from 'components/Styled';
import Sprite from 'images/sprite.svg';
import { selectModalOpened } from 'redux/general/selectors';
import { toggleModal } from 'redux/general/slice';
import UserModal from 'components/UserModal/UserModal';
import BACKEND_URL from 'constants/backend.url';

const UserInfo = () => {
  const user = useSelector(selectUser);
  const userName = user.username;
  const dispatch = useDispatch();
  const [popupOpened, setPopupOpened] = useState(false);
  const modalOpened = useSelector(selectModalOpened);

  const clickHandler = () => {
    dispatch(logOut());
  };

  const toggleUserPopup = () => {
    setPopupOpened(!popupOpened);
  };

  const openModal = () => {
    dispatch(toggleModal());
    setPopupOpened(false);
  };

  return (
    <UserInfoStyled>
      <Wrapper onClick={toggleUserPopup}>
        <img
          width="50"
          src={`${user.gravatar ? `` : `${BACKEND_URL}/`}${user.avatarURL}`}
          alt="avatar"
        />
        <Span>{userName}</Span>
      </Wrapper>
      {popupOpened && (
        <Popup>
          <span>Edit profile</span>
          <svg className="edit" onClick={openModal}>
            <use href={`${Sprite}#icon-edit`}></use>
          </svg>
          <Button type="button" className="logout" onClick={clickHandler}>
            Log out
            <svg className="icon">
              <use href={`${Sprite}#icon-arrow-right`}></use>
            </svg>
          </Button>
        </Popup>
      )}
      {modalOpened && <UserModal />}
    </UserInfoStyled>
  );
};

export default UserInfo;
