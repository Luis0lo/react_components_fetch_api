import React from 'react';

const Button = ({ text, expandOnClick }) => {
  return <button onClick={expandOnClick}>{text}</button>;
};

export default Button;
