import React, { useState } from 'react';

import '../../styles/main.css';
import './Error.css';

export default function ErrorAlert(props: any) {
  const [hide, setHide] = useState(false);

  setTimeout(() => {
    setHide(true);
  }, 3000);

  return (
    <div
      className={
        hide
          ? 'alert-bannerHide sm:w-full md:w-auto fixed top-5'
          : 'alert-banner sm:w-full md:w-auto fixed top-5'
      }
      style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
    >
      <label
        className="close cursor-pointer flex items-center justify-between w-full p-4 2xl:p-5 bg-red-500 shadow text-white break-all sm: text-sm md:text-lg lg:text-1xl 2xl:text-xl"
        title="close"
        htmlFor="banneralert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          viewBox="0 0 19 19"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        {props.message}
      </label>
    </div>
  );
}
