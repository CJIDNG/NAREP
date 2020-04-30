import React from 'react';
import PropTypes from 'prop-types';
import {
  GroupContainer,
  TextAreaContainer
} from './form-input.styles';

const TextArea = ({ ...props }) => (
  <GroupContainer>
    <TextAreaContainer {...props} />
  </GroupContainer>
);
TextArea.propTypes = {
  label: PropTypes.string
};
TextArea.defaultProps = {
  label: null
};
export default TextArea;
