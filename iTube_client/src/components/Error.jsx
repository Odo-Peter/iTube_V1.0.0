import React from 'react';

const Error = ({ message }) => {
  return (
    <div>
      <p className="text-sm font-bold">{message}</p>
    </div>
  );
};

export default Error;
