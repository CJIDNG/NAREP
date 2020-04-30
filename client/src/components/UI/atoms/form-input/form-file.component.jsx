import React from 'react';
import PropTypes from 'prop-types';
import {
  GroupContainer,
  FileInput
} from './form-input.styles';

const TextArea = ({ ...props }) => (
  <GroupContainer>
    <FileInput {...props} />
  </GroupContainer>
);
TextArea.propTypes = {
  label: PropTypes.string
};
TextArea.defaultProps = {
  label: null
};
export default TextArea;
