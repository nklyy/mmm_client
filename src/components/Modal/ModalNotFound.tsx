import React, { useState } from 'react';

import './Modal.css';

export default function ModalNotFound(props: any) {
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide(true);
  };

  const list = props.notF.map((item: string, idx: number) => (
    <li key={idx}>{item}</li>
  ));

  return (
    <div
      className={
        hide
          ? 'slide-out-top fixed inset-0 w-full h-full z-20 overflow-y-auto min-h-screen p-2'
          : 'fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto min-h-screen p-2 '
      }
    >
      <div className="relative w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-2/5 mx-2 sm:mx-auto mt-10 mb-24 opacity-100">
        <div className="relative bg-white shadow-lg rounded-lg text-gray-900 z-20">
          <div className="flex flex-col justify-center items-center p-3 text-yellow-600">
            <div className="flex justify-center w-28 h-28">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-28 w-28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-2xl">Not found tracks!</h2>
          </div>

          <main>
            <ul className="m-3">{list}</ul>
          </main>

          <div className="flex justify-center bg-transparent">
            <button
              onClick={() => handleHide()}
              className="bg-yellow-600 font-semibold text-white py-3 w-full rounded-b-md hover:bg-yellow-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
