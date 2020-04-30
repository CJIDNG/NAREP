import React from 'react';
import PropTypes from 'prop-types';

const AddressIcon = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M12 11H14V13H12V15H14V17H12V19H20V9H12V11ZM16 11H18V13H16V11ZM18 15H16V17H18V15Z" fill="white" fillOpacity="0.54" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12 7H22V21H2V3H12V7ZM4 19H6V17H4V19ZM6 15H4V13H6V15ZM4 11H6V9H4V11ZM6 7H4V5H6V7ZM8 19H10V17H8V19ZM10 15H8V13H10V15ZM8 11H10V9H8V11ZM10 7H8V5H10V7ZM12 19H20V9H12V11H14V13H12V15H14V17H12V19Z" fill="white" fillOpacity="0.54" />
    <path d="M16 11H18V13H16V11Z" fill="white" fillOpacity="0.54" />
    <path d="M16 15H18V17H16V15Z" fill="white" fillOpacity="0.54" />
  </svg>

);
AddressIcon.propTypes = {
  className: PropTypes.string.isRequired
};
export default AddressIcon;
