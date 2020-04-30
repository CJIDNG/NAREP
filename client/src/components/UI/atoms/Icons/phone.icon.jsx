import React from 'react';
import PropTypes from 'prop-types';

const PhoneIcon = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path opacity="0.5" d="M19 17.47C18.12 17.4 17.25 17.25 16.4 17.02L15.21 18.21C16.41 18.62 17.69 18.88 19.01 18.96V17.47H19Z" fill="white" fillOpacity="0.54" />
    <path opacity="0.5" d="M5.03003 5C5.12003 6.32 5.38003 7.59 5.78003 8.8L6.98003 7.6C6.75003 6.76 6.60003 5.89 6.54003 5H5.03003Z" fill="white " fillOpacity="0.54" />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.07001 7.57001C8.70001 6.45001 8.5 5.25 8.5 4C8.5 3.45001 8.04999 3 7.5 3H4C3.45001 3 3 3.45001 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82001 8.59003C9.09998 8.31 9.17999 7.91998 9.07001 7.57001ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM5.03003 5C5.12006 6.32001 5.38 7.59003 5.79004 8.79999L6.99005 7.59003C6.75 6.76001 6.60004 5.89001 6.53003 5H5.03003Z" fill="white" fillOpacity="0.54" />
  </svg>

);

PhoneIcon.propTypes = {
  className: PropTypes.string.isRequired
};
export default PhoneIcon;
