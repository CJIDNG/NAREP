import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormInput from '@Atoms/form-input/form-input.component';
import AuthButton from '@Components/UI/atoms/custom-button/auth-button.component';
import SignupValidation from '@Utils/validations/auth.validations';
import Validator from '@Utils/validator';
import { signUpStart } from '@Redux/user/user.action';
import {
  Container, Title, FormContainer, InputErrors, ToSignin, LinkToSignin
} from '@Atoms/form-input/component.styles';

const SignUp = ({ signUpStart: createUserRequest, history }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [userErrors, setUserErrors] = useState({
    errors: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const {
    username, email, password, confirmPassword
  } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;
    const { errors, ...others } = userErrors;
    const newFields = { ...others, [name]: value };
    const validatorErrors = new Validator(SignupValidation).validate(newFields);
    setUserErrors({ errors: { ...errors, [name]: validatorErrors[name] }, ...newFields });
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const formValid = (formErrors) => !Object.values(formErrors).filter((val) => !!val).length;
  const { errors } = userErrors;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValid(errors)) {
      await createUserRequest({
        username, email, password, confirmPassword
      });
    }
    return false;
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Register Account</Title>
        <FormInput
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          label="Username"
        />
        <InputErrors>{ errors.username }</InputErrors>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"

        />
        <InputErrors>{ errors.email }</InputErrors>

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
        />
        <InputErrors>{ errors.password }</InputErrors>

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"

        />
        <InputErrors>{ errors.confirmPassword }</InputErrors>
        <AuthButton>
          Create my account
        </AuthButton>
        <br />
        <ToSignin>
          Already have an account?
          <LinkToSignin to="/signin">Sign in</LinkToSignin>
        </ToSignin>
      </FormContainer>
    </Container>
  );
};
SignUp.propTypes = {
  signUpStart: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});
export default withRouter(connect(null, mapDispatchToProps)(SignUp));
