import React from 'react';

import '../../styles/main.css';
import deezer from '../../assets/img/deezerW.png';
import spotify from '../../assets/img/spotifyTEXT.svg.png';

const image: any = { spotify: spotify, deezer: deezer };

export default function AuthButton(props: any) {
  return (
    <div>
      <button
        onClick={() => props.fnc()}
        // className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out"
        className={
          props.disbl
            ? 'w-60 h-28 md:w-80 md:h-40 m-1 bg-black bg-no-repeat bg-origin-content bg-center bg-contain p-2 hover:bg-gray-700 transition duration-200 each-in-out bg-gray-400 pointer-events-none'
            : 'w-60 h-28 md:w-80 md:h-40 m-1 bg-black bg-no-repeat bg-origin-content bg-center bg-contain p-2 hover:bg-gray-700 transition duration-200 each-in-out'
        }
        style={{
          backgroundImage: `url(${image[props.provider]})`,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}
      />
    </div>
  );
}
// : 'mt-3 border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out text-xs sm:text-xs md:text-xl 2xl:text-3xl'
