import React, { useContext, useEffect, useState } from 'react';

import '../../styles/main.css';

import { Link } from 'react-router-dom';
import OAuth from '../OAuth/OAuth';
import { PageContext } from '../../context/PageContext';
import axios from 'axios';
import ErrorAlert from '../Error/ErrorAlert';

const provider = ['deezer', 'spotify'];

export default function ChooseFrom() {
  const { disableNextB, loadingM, errorAl, setErrorAl } =
    useContext(PageContext);
  const [code, setCode]: any = useState('');
  const [nextStep, setNextStep] = useState(false);

  const buttons = provider.map((pr) => (
    <OAuth provider={pr} key={pr} moveMusic={false} dzB={false} spB={false} />
  ));

  useEffect(() => {
    async function check() {
      const param = new URLSearchParams(window.location.search);

      setCode(param.get('code'));
      window.history.replaceState(null, '', window.location.pathname);

      if (code) {
        try {
          await axios.post('http://localhost:4000/v1/deezer/checkT', {
            code,
          });

          setNextStep(true);
        } catch (e) {
          // console.log(e);
          setErrorAl(true);
        }
      }
    }

    check();
  });

  return (
    <div>
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
      {errorAl ? <ErrorAlert /> : false}
    </div>
  );
}

// https://tailwindgrids.com/#/
// https://appydev.co/submit
// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
// https://codepen.io/damcclean/pen/GRoRRdR
// https://tailwindcomponents.com/component/full-page-overlay-loading-screen
