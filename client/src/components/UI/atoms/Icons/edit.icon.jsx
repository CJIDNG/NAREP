import React from 'react';
import PropTypes from 'prop-types';

const EditIcon = ({ className, ...otherProps }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.33331 13.1539L13.9166 3.92308L17.5104 7.38461L7.92706 16.6154H4.33331V13.1539ZM6.25 14.7692H7.13165L14.7983 7.38461L13.9167 6.53539L6.25 13.92V14.7692Z" fill="black" fillOpacity="0.54" />
    <path d="M20.3471 4.65231C20.7208 4.29232 20.7208 3.71078 20.3471 3.35078L18.1046 1.19078C17.7308 0.830776 17.1271 0.830776 16.7533 1.19078L14.875 3.00001L18.4688 6.46155L20.3471 4.65231Z" fill="black" fillOpacity="0.54" />
  </svg>


);
EditIcon.propTypes = {
  className: PropTypes.string.isRequired
};
export default EditIcon;
