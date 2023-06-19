import { ModalStyled } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectModalClosing,
  selectModalOpened,
  selectThemeMode,
} from 'redux/general/selectors';
import { setModalClosing, toggleModal } from 'redux/general/slice';
import Sprite from 'images/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ handleClose, children }) => {
  const dispatch = useDispatch();
  const modalOpened = useSelector(selectModalOpened);
  const modalClosing = useSelector(selectModalClosing);
  const themeMode = useSelector(selectThemeMode);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  const closeModal = () => {
    dispatch(setModalClosing());
    setTimeout(() => {
      dispatch(toggleModal());
      handleClose();
    }, 200);
  };

  const handleCloseModal = e => {
    if (
      (e.type === 'click' && e.target === e.currentTarget) ||
      (e.type === 'keydown' && e.key === 'Escape')
    ) {
      closeModal();
    }
  };

  return createPortal(
    <ModalStyled
      onClick={handleCloseModal}
      className={`${!modalOpened ? 'is-hidden' : ''} theme ${themeMode}`}
      modalClosing={modalClosing}
      theme={themeMode}
    >
      <div className="modal">
        <div className="inner">
          <button type="buttn" className="close" onClick={closeModal}>
            <svg className="close__icon">
              <use href={`${Sprite}#icon-close`}></use>
            </svg>
          </button>
          <div className="text">{children}</div>
        </div>
      </div>
    </ModalStyled>,
    modalRoot
  );
};

export default Modal;
