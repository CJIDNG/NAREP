import React from 'react';
import PropTypes from 'prop-types';

const FileIcon = ({ className }) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5.83333 2.65625V0H0.625C0.278646 0 0 0.208984 0 0.46875V9.53125C0 9.79102 0.278646 10 0.625 10H9.375C9.72135 10 10 9.79102 10 9.53125V3.125H6.45833C6.11458 3.125 5.83333 2.91406 5.83333 2.65625ZM10 2.38086V2.5H6.66667V0H6.82552C6.99219 0 7.15104 0.0488281 7.26823 0.136719L9.81771 2.05078C9.9349 2.13867 10 2.25781 10 2.38086Z" fill="#939393" />
  </svg>

);
FileIcon.propTypes = {
  className: PropTypes.string.isRequired
};
export default FileIcon;
