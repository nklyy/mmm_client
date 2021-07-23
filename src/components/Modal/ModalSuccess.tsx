import React, { useState } from 'react';

import './Moda.css';

export default function ModalSuccess() {
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide(true);
  };

  return (
    <div
      className={
        hide
          ? 'slide-out-top fixed inset-0 w-full h-full z-20 overflow-y-auto min-h-screen p-2 flex flex-col justify-center items-center'
          : 'fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto min-h-screen p-2 flex flex-col justify-center items-center'
      }
    >
      <div className="relative w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-2/5 mx-2 sm:mx-auto mt-10 mb-24 opacity-100">
        <div className="relative bg-white shadow-lg rounded-lg text-gray-900 z-20">
          <div className="flex flex-col justify-center items-center p-3 text-green-600">
            <div className="flex justify-center w-28 h-28 border-4 border-green-600 rounded-full mb-4">
              <svg className="fill-current w-20" viewBox="0 0 20 20">
                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" />
              </svg>
            </div>
            <h2 className="font-semibold text-2xl">Success</h2>
          </div>

          <div className="flex justify-center bg-transparent">
            <button
              onClick={() => handleHide()}
              className="bg-green-600 font-semibold text-white py-3 w-full rounded-b-md hover:bg-green-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
