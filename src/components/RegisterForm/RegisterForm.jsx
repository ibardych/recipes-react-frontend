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

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    //resetForm();
  };

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, submitCount }) => {
          const hasUsernameError =
            submitCount > 0 && touched.username && errors.username;
          const hasEmailError =
            submitCount > 0 && touched.email && errors.email;
          const hasPasswordError =
            submitCount > 0 && touched.password && errors.password;
          const isFormSubmitted = submitCount > 0;

          return (
            <Form className="form" autoComplete="off">
              <Caption>Registration</Caption>
              <FormFields>
                <InputWraper
                  className={
                    hasUsernameError
                      ? 'error'
                      : isFormSubmitted
                      ? 'success'
                      : ''
                  }
                >
                  <Field
                    type="text"
                    name="username"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label htmlFor="username">Name *</label>
                  <ErrorMessage
                    className="error"
                    component="div"
                    name="username"
                  />
                  <svg className="icon">
                    <use href={`${Sprite}#icon-user`}></use>
                  </svg>
                  {hasUsernameError && (
                    <svg className="icon-error">
                      <use href={`${Sprite}#icon-error`}></use>
                    </svg>
                  )}
                  {!hasUsernameError && isFormSubmitted && (
                    <svg className="icon-success">
                      <use href={`${Sprite}#icon-success`}></use>
                    </svg>
                  )}
                </InputWraper>

                <InputWraper
                  className={
                    hasEmailError ? 'error' : isFormSubmitted ? 'success' : ''
                  }
                >
                  <Field
                    type="text"
                    name="email"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label htmlFor="email">Email *</label>
                  {hasEmailError && (
                    <ErrorMessage
                      className="error"
                      component="div"
                      name="email"
                    />
                  )}
                  <svg className="icon">
                    <use href={`${Sprite}#icon-mail`}></use>
                  </svg>
                  {hasEmailError && (
                    <svg className="icon-error">
                      <use href={`${Sprite}#icon-error`}></use>
                    </svg>
                  )}
                  {!hasUsernameError && isFormSubmitted && (
                    <svg className="icon-success">
                      <use href={`${Sprite}#icon-success`}></use>
                    </svg>
                  )}
                </InputWraper>

                <InputWraper
                  className={
                    hasPasswordError
                      ? 'error'
                      : isFormSubmitted
                      ? 'success'
                      : ''
                  }
                >
                  {!hasPasswordError && !isFormSubmitted && (
                    <ShowPassword
                      clickHandler={onClickHandler}
                      isShown={passwordShown}
                    />
                  )}
                  <Field
                    type={passwordShown ? 'text' : 'password'}
                    name="password"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label htmlFor="password">Password *</label>
                  {hasPasswordError && (
                    <ErrorMessage
                      className="error"
                      component="div"
                      name="password"
                    />
                  )}
                  <svg className="icon">
                    <use href={`${Sprite}#icon-lock`}></use>
                  </svg>
                  {hasPasswordError && (
                    <svg className="icon-error">
                      <use href={`${Sprite}#icon-error`}></use>
                    </svg>
                  )}
                  {!hasPasswordError && isFormSubmitted && (
                    <svg className="icon-success">
                      <use href={`${Sprite}#icon-success`}></use>
                    </svg>
                  )}
                </InputWraper>
              </FormFields>
              <ButtonContainer>
                <Button className="type2 button" type="submit">
                  Sign up
                </Button>
              </ButtonContainer>
            </Form>
          );
        }}
      </Formik>
      {message && <Message>{message}</Message>}
      <BottomLink to="/signin">Sign In</BottomLink>
    </RegisterFormStyled>
  );
};
