import React from 'react';

import '../../styles/main.css';
import im from '../../assets/img/hero_everyone@2x.webp';

export default function ChooseFrom() {
  return (
    <div className="min-h-screen p-2 flex flex-col justify-center items-center xl:mr-48 xl:ml-48 md:mr-12 md:ml-12">
      <h1 className="font-bold mb-2 sm:text-xs md:text-2xl 2xl:text-4xl">
        Choose from transfer your music!
      </h1>
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <button className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out">
          <img
            className="object-fill lg:h-28 lg: w-full xl:h-30 1xl:h-36 1xl: w-full xl: w-full 2xl:h-40 2xl: w-full"
            src={im}
            alt=""
          />
        </button>
        <button className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out">
          <img
            className="object-fill lg:h-28 lg: w-full xl:h-30 1xl:h-36 1xl: w-full xl: w-full 2xl:h-40 2xl: w-full"
            src={im}
            alt=""
          />
        </button>
        <button className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out">
          <img
            className="object-fill lg:h-28 lg: w-full xl:h-30 1xl:h-36 1xl: w-full xl: w-full 2xl:h-40 2xl: w-full"
            src={im}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
