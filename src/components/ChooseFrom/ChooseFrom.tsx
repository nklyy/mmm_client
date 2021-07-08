import React, { useState } from 'react';

import '../../styles/main.css';
import deezer from '../../assets/img/deezerW.png';
import spotify from '../../assets/img/spotifyTEXT.svg.png'

import { Link } from 'react-router-dom';

export default function ChooseFrom() {
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleDeezerLoadMusic = (): string => {
    console.log('Deezer');
    return 'Deezer';
  };

  const handleSpotifyLoadMusic = (): string => {
    console.log('Spotify');
    return 'Spotify';
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <div>
          <button
            onClick={() => handleDeezerLoadMusic()}
            // className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out"
            className="w-60 h-28 md:w-80 md:h-40 m-1 bg-black bg-no-repeat bg-origin-content bg-center bg-contain p-2 hover:bg-gray-700 transition duration-200 each-in-out"
            style={{backgroundImage: `url(${deezer})`,  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}}
          >
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => handleSpotifyLoadMusic()}
            // className="bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out"
            className="w-60 h-28 md:w-80 md:h-40 m-1 bg-black bg-no-repeat bg-origin-content bg-center bg-contain p-2 hover:bg-gray-700 transition duration-200 each-in-out"
            style={{backgroundImage: `url(${spotify})`,  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}}
          >
          </button>
        </div>
      </div>

      <Link
        to="/cw"
        className={
          disable
            ? 'mt-3 border bg-gray-400 text-white px-6 py-2 rounded font-medium mx-3 pointer-events-none text-xs sm:text-xs md:text-xl 2xl:text-3xl'
            : 'mt-3 border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out text-xs sm:text-xs md:text-xl 2xl:text-3xl'
        }
      >
        {loading ? 'Wait please! We are loading your tracks!' : 'Next'}
      </Link>
    </div>
  );
}

// https://tailwindgrids.com/#/
// https://appydev.co/submit

