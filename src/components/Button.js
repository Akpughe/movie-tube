import React from 'react';

const Button = ({text, icon}) => {
  return (
    <button className=" inline-flex items-center font-normal text-xs bg-yellow-600 px-1 py-1 rounded text-white">
      {' '}
      <span>{text}</span>{' '}
      {icon}
    </button>
  );
};

export default Button;
