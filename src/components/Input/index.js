import React from 'react';

const Input = ({ searchOnChange }) => {
  return (
    <div>
      <h2>Wiki Starwards</h2>
      <input
        type="text"
        placeholder="Search for you starward"
        onChange={searchOnChange}
      />
    </div>
  );
};

export default Input;
