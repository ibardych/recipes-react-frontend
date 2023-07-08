import {
  Caption,
  ButtonContainer,
  BottomLink,
} from 'components/Form/Form.styled';
import { InputWraper } from 'components/Form/Input.styled';
import { Button } from 'components/Styled';
import { FormFields, LoginFormStyled } from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, refreshUser } from 'redux/user/operations';
import Message from 'components/Message/Message';
import ShowPassword from 'components/ShowPassword/ShowPassword';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { selectAuthError } from 'redux/user/selectors';
import Sprite from 'images/sprite.svg';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const message = useSelector(selectAuthError);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email must be a valid email')
      .min(3)
      .max(254)
      .required('Email is a required field'),
    password: yup.string().required('Password is a required field').min(8),
  });

  const initialValues = { email: '', password: '' };

  const onClickHandler = () => {
    setPasswordShown(state => !state);
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    //if (!message) resetForm();
  };

  const r = () => {
    dispatch(refreshUser());
  };

  return (
    <LoginFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, submitCount }) => {
          const hasEmailError =
            submitCount > 0 && touched.email && errors.email;
          const hasPasswordError =
            submitCount > 0 && touched.password && errors.password;
          const isFormSubmitted = submitCount > 0;

          return (
            <Form autoComplete="off" className="form">
              <Caption>Sign in</Caption>
              <FormFields>
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
                  {!hasEmailError && isFormSubmitted && (
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
                  <Field
                    type={passwordShown ? 'text' : 'password'}
                    name="password"
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label htmlFor="password">Password *</label>

                  {!hasPasswordError && !isFormSubmitted && (
                    <ShowPassword
                      clickHandler={onClickHandler}
                      isShown={passwordShown}
                    />
                  )}
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
                  Sign In
                </Button>
              </ButtonContainer>
              <div onClick={r}>sdf</div>
            </Form>
          );
        }}
      </Formik>
      {message && <Message>{message}</Message>}
      <BottomLink to="/register">Registration</BottomLink>
    </LoginFormStyled>
  );
};
