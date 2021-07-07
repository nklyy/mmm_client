import React, { useState } from 'react';

import '../../styles/main.css';
import im from '../../assets/img/hero_everyone@2x.webp';
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
    <div className="min-h-screen p-2 flex flex-col justify-center items-center xl:mr-48 xl:ml-48 md:mr-12 md:ml-12 2xl:mr-96 2xl:ml-96">
      {/*<h1 className="font-bold mb-2 sm:text-xs md:text-2xl 2xl:text-4xl">*/}
      {/*  Choose from transfer your music!*/}
      {/*</h1>*/}
      {/*<div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center">*/}
      {/*  <button*/}
      {/*    onClick={() => handleDeezerLoadMusic()}*/}
      {/*    className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out"*/}
      {/*  >*/}
      {/*    <img*/}
      {/*      className="object-fill h-26 w-full sm:h-20 sm:w-full md:h-24 md:w-full lg:h-28 lg:w-full xl:h-32 xl:w-full 1xl:h-36 1xl:w-full 2xl:h-52 2xl: w-full"*/}
      {/*      src={im}*/}
      {/*      alt=""*/}
      {/*    />*/}
      {/*  </button>*/}
      {/*  <button*/}
      {/*    onClick={() => handleSpotifyLoadMusic()}*/}
      {/*    className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out"*/}
      {/*  >*/}
      {/*    <img*/}
      {/*      className="object-fill h-26 w-full sm:h-20 sm:w-full md:h-24 md:w-full lg:h-28 lg:w-full xl:h-32 xl:w-full 1xl:h-36 1xl:w-full 2xl:h-32 2xl: w-full"*/}
      {/*      src={im}*/}
      {/*      alt=""*/}
      {/*    />*/}
      {/*  </button>*/}
      {/*<button*/}
      {/*  onClick={() => handleSpotifyLoadMusic()}*/}
      {/*  className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out"*/}
      {/*>*/}
      {/*  <img*/}
      {/*    className="object-fill h-26 w-full sm:h-20 sm:w-full md:h-20 md:w-full lg:h-28 lg:w-full 1xl:h-36 1xl:w-full 2xl:h-52 2xl: w-full"*/}
      {/*    src={im}*/}
      {/*    alt=""*/}
      {/*  />*/}
      {/*</button>{' '}*/}
      {/*<button*/}
      {/*  onClick={() => handleSpotifyLoadMusic()}*/}
      {/*  className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out"*/}
      {/*>*/}
      {/*  <img*/}
      {/*    className="object-fill h-26 w-full sm:h-20 sm:w-full md:h-20 md:w-full lg:h-28 lg:w-full 1xl:h-36 1xl:w-full 2xl:h-52 2xl: w-full"*/}
      {/*    src={im}*/}
      {/*    alt=""*/}
      {/*  />*/}
      {/*</button>{' '}*/}
      {/*<button*/}
      {/*  onClick={() => handleSpotifyLoadMusic()}*/}
      {/*  className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out"*/}
      {/*>*/}
      {/*  <img*/}
      {/*    className="object-fill h-26 w-full sm:h-20 sm:w-full md:h-20 md:w-full lg:h-28 lg:w-full 1xl:h-36 1xl:w-full 2xl:h-52 2xl: w-full"*/}
      {/*    src={im}*/}
      {/*    alt=""*/}
      {/*  />*/}
      {/*</button>{' '}*/}
      {/*<button*/}
      {/*  onClick={() => handleSpotifyLoadMusic()}*/}
      {/*  className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out"*/}
      {/*>*/}
      {/*  <img*/}
      {/*    className="object-fill h-26 w-full sm:h-20 sm:w-full md:h-20 md:w-full lg:h-28 lg:w-full 1xl:h-36 1xl:w-full 2xl:h-52 2xl: w-full"*/}
      {/*    src={im}*/}
      {/*    alt=""*/}
      {/*  />*/}
      {/*</button>*/}
      {/*</div>*/}

      <div className="flex flex-wrap overflow-hidden md:-mx-1">
        <div className="w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:w-1/2">
          <button
            onClick={() => handleSpotifyLoadMusic()}
            className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out"
          >
            <img
              className="object-fill h-26 w-full sm:h-20 sm:w-full md:h-24 md:w-full lg:h-28 lg:w-full xl:h-32 xl:w-full 1xl:h-36 1xl:w-full 2xl:h-32 2xl: w-full"
              src={im}
              alt=""
            />
          </button>
        </div>

        <div className="w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:w-1/2">
          <button
            onClick={() => handleSpotifyLoadMusic()}
            className="border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out"
          >
            <img
              className="object-fill h-26 w-full sm:h-20 sm:w-full md:h-24 md:w-full lg:h-28 lg:w-full xl:h-32 xl:w-full 1xl:h-36 1xl:w-full 2xl:h-32 2xl: w-full"
              src={im}
              alt=""
            />
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
