import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/main.css';

import OAuth from '../OAuth/OAuth';
import ErrorAlert from '../Error/ErrorAlert';
import Loader from '../Loader/Loader';

import { PageContext } from '../../context/PageContext';
import axios from 'axios';

const provider = ['deezer', 'spotify'];

export default function ChooseFrom() {
  const { errorAl, setErrorAl, dDeezer, setDDeezer, dSpotify, setDSpotify } =
    useContext(PageContext);
  const [code, setCode]: any = useState('');
  const [nextStep, setNextStep] = useState(false);
  const [errMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function check() {
      const param = new URLSearchParams(window.location.search);

      setCode(param.get('code'));
      window.history.replaceState(null, '', window.location.pathname);

      if (code) {
        const { data } = await axios.post(
          'http://localhost:4000/v1/deezer/checkT',
          {
            code,
          },
        );

        if (data.error) {
          setErrorMessage(data.error);
          setErrorAl(true);
        } else {
          setLoading(true);
          setDDeezer(true);
          setDSpotify(true);

          const dMusic = await axios.post(
            'http://localhost:4000/v1/deezer/userMusic',
            { code },
          );
          console.log(dMusic);

          setNextStep(true);
        }
      }
    }

    check();
  });

  const buttons = provider.map((pr) => (
    <OAuth
      provider={pr}
      key={pr}
      moveMusic={false}
      dzB={dDeezer}
      spB={dSpotify}
    />
  ));

  return (
    <div>
      {loading ? <Loader /> : false}
      <div className="min-h-screen p-2 flex flex-col justify-center items-center">
        {errorAl ? <ErrorAlert message={errMessage} /> : false}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {buttons}
        </div>

        {/*<Link*/}
        {/*  to="/cw"*/}
        {/*  className={*/}
        {/*    disableNextB*/}
        {/*      ? 'mt-3 border bg-gray-400 text-white px-6 py-2 rounded font-medium mx-3 pointer-events-none text-xs sm:text-xs md:text-xl 2xl:text-3xl'*/}
        {/*      : 'mt-3 border bg-black text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-700 transition duration-200 each-in-out text-xs sm:text-xs md:text-xl 2xl:text-3xl'*/}
        {/*  }*/}
        {/*>*/}
        {/*  {loadingM ? 'Wait please! We are loading your tracks!' : 'Next'}*/}
        {/*</Link>*/}
      </div>
    </div>
  );
}

// https://tailwindgrids.com/#/
// https://appydev.co/submit
// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
// https://codepen.io/damcclean/pen/GRoRRdR
// https://tailwindcomponents.com/component/full-page-overlay-loading-screen
