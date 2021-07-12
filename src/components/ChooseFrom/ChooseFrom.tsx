import React, { useContext } from 'react';

import '../../styles/main.css';

import { Link } from 'react-router-dom';
import OAuth from '../OAuth/OAuth';
import { PageContext } from '../../context/PageContext';

const provider = ['deezer', 'spotify'];

export default function ChooseFrom() {
  const { disableNextB, loadingM } = useContext(PageContext);

  const buttons = provider.map((pr) => (
    <OAuth provider={pr} key={pr} moveMusic={false} dzB={false} spB={false} />
  ));

  return (
    <div className="min-h-screen p-2 flex flex-col justify-center items-center">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {buttons}
      </div>

      <Link
        to="/cw"
        className={
          disableNextB
            ? 'mt-3 border bg-gray-400 text-white px-6 py-2 rounded font-medium mx-3 pointer-events-none text-xs sm:text-xs md:text-xl 2xl:text-3xl'
            : 'mt-3 border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out text-xs sm:text-xs md:text-xl 2xl:text-3xl'
        }
      >
        {loadingM ? 'Wait please! We are loading your tracks!' : 'Next'}
      </Link>
    </div>
  );
}

// https://tailwindgrids.com/#/
// https://appydev.co/submit
// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
