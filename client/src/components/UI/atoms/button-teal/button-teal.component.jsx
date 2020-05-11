import React from 'react';

const ButtonTeal = ({ children, className, ...otherProps }) => (
  <button
    type="button"
    className={ `px-8 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded ${className}` }
    { ...otherProps }
  >
    { children }
  </button>
);

export default ButtonTeal;