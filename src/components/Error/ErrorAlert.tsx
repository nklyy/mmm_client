import React from 'react';

import '../../styles/main.css';
import './Error.css';

export default function ErrorAlert(props: any) {
  return (
    <div className="alert-banner sm:w-full md:w-auto fixed top-0">
      <input type="checkbox" className="hidden" id="banneralert" />

      <label
        className="close cursor-pointer flex items-center justify-between w-full p-4 2xl:p-5 bg-red-500 shadow text-white break-all sm: text-sm md:text-lg lg:text-3xl 2xl:text-xl"
        title="close"
        htmlFor="banneralert"
      >
        {props.message}
      </label>
    </div>
  );
}
