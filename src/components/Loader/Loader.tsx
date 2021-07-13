import React from 'react';

import '../../styles/main.css';
import './Loader.css';

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4" />
      <h2 className="text-center text-white text-xl font-semibold">
        Loading...
      </h2>
      <p className="w-full p-2 text-center text-white">
        This may take a few seconds or minuter it dependent on your number of
        music, please dont close this page.
      </p>
    </div>
  );
}
