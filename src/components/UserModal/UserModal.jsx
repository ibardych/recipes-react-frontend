import Modal from 'components/Modal/Modal';
import { AddImage, FieldWrapper } from './UserModal.styled';
import { useRef, useState, forwardRef } from 'react';
import Sprite from 'images/sprite.svg';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { selectUser } from 'redux/user/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/Styled';
import { updateUserData } from 'redux/user/operations';
import BACKEND_URL from 'constants/backend.url';

const UserModal = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const user = useSelector(selectUser);
  const [imageUrl, setImageUrl] = useState(
    `${user.gravatar ? `` : `${BACKEND_URL}/`}${user.avatarURL}`
  );
  const [username, setUsername] = useState(user.username);
  const fileInputRef = useRef(null);

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

    dispatch(updateUserData(formData));
    resetForm();
  };

  return (
    <Modal>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" onChange={handleOnChange}>
          <AddImage onClick={handleFileClick} image={imageUrl}>
            {!imageUrl && (
              <svg className="icon">
                <use href={`${Sprite}#icon-photo`}></use>
              </svg>
            )}
          </AddImage>
          <FileInput ref={fileInputRef} name="image" />

          <FieldWrapper>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              value={username}
            />
            <ErrorMessage className="error" component="div" name="username" />
          </FieldWrapper>

          <Button className="type2" type="submit">
            Save changes
          </Button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default UserModal;
