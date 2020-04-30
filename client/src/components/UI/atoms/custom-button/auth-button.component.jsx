import React from 'react';
import PropTypes from 'prop-types';
import { CustomButtonContainer } from './custom-button.styles';

const AuthButton = ({ children }) => (
  <CustomButtonContainer
    type="submit"
  >
    { children }
  </CustomButtonContainer>
);
AuthButton.propTypes = {
  children: PropTypes.string.isRequired,
};
export default AuthButton;
