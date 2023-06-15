import { useState } from 'react';
import { UserInfoStyled, Span, Wrapper, Popup } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { selectUser } from 'redux/user/selectors';
import { Button } from 'components/Styled';
import Sprite from 'images/sprite.svg';

const UserInfo = () => {
  const user = useSelector(selectUser);
  const userName = user.username;
  const dispatch = useDispatch();
  const [popupOpened, setPopupOpened] = useState(false);

  const clickHandler = () => {
    dispatch(logOut());
  };

  const toggleUserPopup = () => {
    setPopupOpened(!popupOpened);
  };

  return (
    <UserInfoStyled>
      <Wrapper onClick={toggleUserPopup}>
        <img width="50" src={`https:${user.avatarURL}`} alt="avatar" />
        <Span>{userName}</Span>
      </Wrapper>
      {popupOpened && (
        <Popup>
          <span>Edit profile</span>
          <Button type="button" className="logout" onClick={clickHandler}>
            Log out
            <svg className="icon">
              <use href={`${Sprite}#icon-arrow-right`}></use>
            </svg>
          </Button>
          <svg className="edit">
            <use href={`${Sprite}#icon-edit`}></use>
          </svg>
        </Popup>
      )}
    </UserInfoStyled>
  );
};

export default UserInfo;
