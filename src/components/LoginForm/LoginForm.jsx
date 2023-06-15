import {
  Caption,
  ButtonContainer,
  BottomLink,
} from 'components/Form/Form.styled';
import { InputWraper } from 'components/Form/Input.styled';
import { Button } from 'components/Styled';
import { FormFields, LoginFormStyled } from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/user/operations';
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
    password: yup.string().required('Password is a required field'),
  });

  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    //if (!message) resetForm();
  };

  const onClickHandler = () => {
    setPasswordShown(state => !state);
  };

  return (
    <LoginFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" className="form">
          <Caption>Login</Caption>
          <FormFields>
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
              <Field
                type={passwordShown ? 'text' : 'password'}
                name="password"
                placeholder=" "
                autoComplete="off"
              />
              <label htmlFor="password">Password *</label>
              <ShowPassword
                clickHandler={onClickHandler}
                isShown={passwordShown}
              />
              <ErrorMessage className="error" component="div" name="password" />
              <svg className="icon">
                <use href={`${Sprite}#icon-lock`}></use>
              </svg>
            </InputWraper>
          </FormFields>
          <ButtonContainer>
            <Button className="type2" type="submit">
              Sign In
            </Button>
          </ButtonContainer>
        </Form>
      </Formik>
      {message && <Message>{message}</Message>}
      <BottomLink to="/register">Registration</BottomLink>
    </LoginFormStyled>
  );
};
