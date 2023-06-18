import { ModalStyled } from './Modal.styled';
import { IoMdClose } from 'react-icons/io';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalClosing, selectModalOpened } from 'redux/general/selectors';
import { setModalClosing, toggleModal } from 'redux/general/slice';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const modalOpened = useSelector(selectModalOpened);
  const modalClosing = useSelector(selectModalClosing);

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
      className={!modalOpened ? 'is-hidden' : ''}
      modalClosing={modalClosing}
    >
      <div className="modal">
        <div className="inner">
          <button type="buttn" className="close" onClick={closeModal}>
            <IoMdClose className="close__icon" />
          </button>
          <div className="text">{children}</div>
        </div>
      </div>
    </ModalStyled>,
    modalRoot
  );
};

export default Modal;
