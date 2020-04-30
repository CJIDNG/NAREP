import React from 'react';
import PropTypes from 'prop-types';

const DeleteIcon = ({ className, ...otherProps }) => (

  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
    <path opacity="0.5" d="M8 9H16V19H8V9Z" fill="black" fillOpacity="0.54" />
    <path d="M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill="black" fillOpacity="0.54" />
    <path fillRule="evenodd" clipRule="evenodd" d="M8 21C6.90002 21 6 20.1 6 19V7H18V19C18 20.1 17.1 21 16 21H8ZM16 9H8V19H16V9Z" fill="black" fillOpacity="0.54" />
  </svg>

);
DeleteIcon.propTypes = {
  className: PropTypes.string.isRequired
};
export default DeleteIcon;
