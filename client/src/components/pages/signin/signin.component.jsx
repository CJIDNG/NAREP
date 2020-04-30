import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestLogin } from '@Redux/user/user.action';
import Validator from '@Utils/validator';
import FormInput from '@Atoms/form-input/form-input.component';
import AuthButton from '@Components/UI/atoms/custom-button/auth-button.component';
import SigninValidation from '@Utils/validations/auth.validations';
import {
  Container, Title, FormContainer, InputErrors, ToSignin, LinkToSignin
} from '@Atoms/form-input/component.styles';


const SignIn = ({
  requestLogin: loginCurrentUser
}) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',

  });
  const [userErrors, setUserErrors] = useState({
    errors: {
      email: '',
      password: '',
    }
  });

  const { email, password } = userCredentials;
  const handleChange = (event) => {
    const { name, value } = event.target;
    const { errors, ...others } = userErrors;
    const newFields = { ...others, [name]: value };
    const validatorErrors = new Validator(SigninValidation).validate(newFields);
    setUserErrors({ errors: { ...errors, [name]: validatorErrors[name] }, ...newFields });
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const formValid = (formErrors) => !Object.values(formErrors).filter((val) => !!val).length;
  const { errors } = userErrors;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValid(errors)) {
      loginCurrentUser({
        email, password
      });
    }
  };
  return (
    <Container>

      <FormContainer onSubmit={handleSubmit}>
        <Title>Login Account</Title>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required

        />
        <InputErrors>{ errors.email }</InputErrors>

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <InputErrors>{ errors.password }</InputErrors>
        <AuthButton>Sign in</AuthButton>
        <br />
        <ToSignin>
          Do not have an account?
          <LinkToSignin to="/signup">Sign Up</LinkToSignin>
        </ToSignin>
      </FormContainer>
    </Container>
  );
};
SignIn.propTypes = {
  requestLogin: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({})

};
SignIn.defaultProps = {
  currentUser: PropTypes.null
};

const mapDispatchToProps = (dispatch) => ({
  requestLogin: (payload) => dispatch(requestLogin(payload))
});

export default connect(null, mapDispatchToProps)(SignIn);
