import Modal from 'components/Modal/Modal';
import { AddImage, FieldWrapper, UserModalStyled } from './UserModal.styled';
import { useRef, useState, forwardRef } from 'react';
import Sprite from 'images/sprite.svg';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { selectUser } from 'redux/user/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/Styled';
import { updateUserData } from 'redux/user/operations';
import { LoaderSmall } from 'components/Loader/Loader';

const UserModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const user = useSelector(selectUser);
  const [imageUrl, setImageUrl] = useState(user.avatarURL);
  const [username, setUsername] = useState(user.username);
  const fileInputRef = useRef(null);
  const updateUserDataLoading = useSelector(
    state => state.user.updateUserDataLoading
  );

  const initialValues = {
    username: user.username,
    image: null,
  };
  const schema = yup.object().shape({
    username: yup.string().required('Username is a required field'),
  });

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const FileInput = forwardRef(({ name }, ref) => (
    <input
      type="file"
      accept=".jpg,.jpeg,.png"
      style={{ display: 'none' }}
      ref={ref}
      name={name}
    />
  ));

  const resetForm = () => {
    setFile(null);
  };

  const handleOnChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'image':
        const image = e.target.files[0];
        setImageUrl(URL.createObjectURL(image));
        setFile(image);
        break;
      case 'username':
        setUsername(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('username', username);

    dispatch(updateUserData(formData)).then(() => {
      handleClose();
      resetForm();
    });
  };

  return (
    <Modal handleClose={handleClose}>
      <UserModalStyled>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off" onChange={handleOnChange}>
            <AddImage onClick={handleFileClick} image={imageUrl}>
              <svg className="icon">
                <use href={`${Sprite}#icon-add`}></use>
              </svg>
            </AddImage>
            <FileInput ref={fileInputRef} name="image" />

            <FieldWrapper>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                value={username}
              />
              <svg className="icon-user">
                <use href={`${Sprite}#icon-user`}></use>
              </svg>
              <svg className="icon-edit">
                <use href={`${Sprite}#icon-edit`}></use>
              </svg>
              <ErrorMessage className="error" component="div" name="username" />
            </FieldWrapper>

            <Button className="type2 button" type="submit">
              Save changes
            </Button>
            {updateUserDataLoading && <LoaderSmall scale="0.7" top="24px" />}
          </Form>
        </Formik>
      </UserModalStyled>
    </Modal>
  );
};

export default UserModal;
