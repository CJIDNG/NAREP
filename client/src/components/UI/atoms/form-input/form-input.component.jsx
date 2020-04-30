import React from 'react';
import PropTypes from 'prop-types';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

const FormInput = ({ label, ...props }) => (
  <GroupContainer>
    <FormInputContainer {...props} />
    { label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        { label }
      </FormInputLabel>
    ) : null }
  </GroupContainer>
);
FormInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
};
FormInput.defaultProps = {
  label: null
};
export default FormInput;
