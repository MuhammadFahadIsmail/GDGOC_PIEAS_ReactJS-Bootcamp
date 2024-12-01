import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
