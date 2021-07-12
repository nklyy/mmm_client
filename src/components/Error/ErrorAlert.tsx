import React, { useState } from 'react';

import '../../styles/main.css';

export default function ErrorAlert(props: any) {
  const [close, setClose] = useState(false);

  const handleCloseAlert = () => {
    setClose(true);
  };

  return (
    <div
      className="w-60 h-16 p-5 bg-red-500 text-white mb-5 rounded-full"
      style={close ? { display: 'none' } : { display: 'block' }}
    >
      <span
        className="ml-5 text-white font-bold float-right text-base leading-5 cursor-pointer transition duration-300"
        onClick={() => handleCloseAlert()}
      >
        &times;
      </span>
      {props.message}
    </div>
  );
}
