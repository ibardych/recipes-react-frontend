import { FormFields, RegisterFormStyled } from './RegisterForm.styled';
import {
  Caption,
  ButtonContainer,
  BottomLink,
} from 'components/Form/Form.styled';
import { InputWraper } from 'components/Form/Input.styled';
import { Button } from 'components/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/user/operations';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Message from 'components/Message/Message';
import ShowPassword from 'components/ShowPassword/ShowPassword';
import { useState } from 'react';
import { selectAuthError } from 'redux/user/selectors';
import Sprite from 'images/sprite.svg';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const initialValues = { username: '', email: '', password: '' };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username must be at least 3 characters')
      .max(254, 'Username must be less than or equal to 254 characters')
      .required('Username is a required field'),
    email: yup
      .string()
      .email('Email must be a valid email')
      .min(3, 'Email must be at least 3 characters')
      .max(254, 'Email must be less than or equal to 254 characters')
      .required('Email is a required field'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(100, 'Password must be less than or equal to 100 characters')
      .required('Password is a required field'),
  });

  const message = useSelector(selectAuthError);

  const onClickHandler = () => {
    setPasswordShown(state => !state);
  };

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className="form" autoComplete="off">
          <Caption>Registration</Caption>
          <FormFields>
            <InputWraper>
              <Field
                type="text"
                name="username"
                placeholder=" "
                autoComplete="off"
              />
              <label htmlFor="username">Name *</label>
              <ErrorMessage className="error" component="div" name="username" />
              <svg className="icon">
                <use href={`${Sprite}#icon-user`}></use>
              </svg>
            </InputWraper>

            <InputWraper>
              <Field
                type="text"
                name="email"
                placeholder=" "
                autoComplete="off"
              />
              <label htmlFor="email">Email *</label>
              <ErrorMessage className="error" component="div" name="email" />
              <svg className="icon">
                <use href={`${Sprite}#icon-mail`}></use>
              </svg>
            </InputWraper>

            <InputWraper>
              <ShowPassword
                clickHandler={onClickHandler}
                isShown={passwordShown}
              />
              <Field
                type={passwordShown ? 'text' : 'password'}
                name="password"
                placeholder=" "
                autoComplete="off"
              />
              <label htmlFor="password">Password *</label>
              <ErrorMessage className="error" component="div" name="password" />
              <svg className="icon">
                <use href={`${Sprite}#icon-lock`}></use>
              </svg>
            </InputWraper>
          </FormFields>
          <ButtonContainer>
            <Button className="type2" type="submit">
              Sign up
            </Button>
          </ButtonContainer>
        </Form>
      </Formik>
      {message && <Message>{message}</Message>}
      <BottomLink to="/signin">Sign In</BottomLink>
    </RegisterFormStyled>
  );
};
