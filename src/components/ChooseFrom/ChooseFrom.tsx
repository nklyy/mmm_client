import React, { useContext, useEffect, useState } from 'react';
import '../../styles/main.css';

import OAuth from '../OAuth/OAuth';
import ErrorAlert from '../Error/ErrorAlert';
import Loader from '../Loader/Loader';
import ChooseWhere from '../ChooseWhere/ChooseWhere';

import { PageContext } from '../../context/PageContext';
import axios from 'axios';

const provider = ['deezer', 'spotify'];
let music: any;

export default function ChooseFrom() {
  const { errorAl, setErrorAl, dDeezer, setDDeezer, dSpotify, setDSpotify } =
    useContext(PageContext);

  const [nextStep, setNextStep] = useState(false);
  const [errMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<any>('');
  const [move, setMove] = useState<any>('');
  const [gi, setGi] = useState<any>('');

  useEffect(() => {
    const param = new URLSearchParams(window.location.search);

    setType(param.get('type'));
    setMove(param.get('m'));
    setGi(param.get('gi'));
  }, []);

  useEffect(() => {
    async function check() {
      window.history.replaceState(null, '', window.location.pathname);

      if (gi) {
        const { data } = await axios.post(
          `http://localhost:4000/v1/${
            type === 's' ? 'spotify' : 'deezer'
          }/checkT`,
          {
            gi,
          },
        );

        if (data.error) {
          setErrorMessage(data.error);
          setErrorAl(true);
        }

        if (move === 'f' && gi) {
          setLoading(true);
          setDDeezer(true);
          setDSpotify(true);

          const dMusic = await axios.post(
            `http://localhost:4000/v1/${
              type === 's' ? 'spotify' : 'deezer'
            }/userMusic`,
            { gi },
          );

          if (dMusic.status === 200) {
            music = dMusic.data;
            console.log(dMusic.data);
            setDDeezer(type === 'd');
            setDSpotify(type === 's');
            setLoading(false);
            setNextStep(true);
          }
        } else if (move === 't' && gi) {
          setLoading(true);
          setDDeezer(true);
          setDSpotify(true);
          const mMusic = await axios.post(
            `http://localhost:4000/v1/${
              type === 's' ? 'spotify/moveToSpotify' : 'deezer'
            }`,
            { gi },
          );

          if (mMusic.status === 200) {
            console.log(mMusic);
            setLoading(false);
          }
        } else {
          setErrorMessage('Something wrong! Please try again!');
          setErrorAl(true);
        }
      }
    }

    check();
  }, [move, gi, setDDeezer, setDSpotify, setErrorAl, type]);

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
    <>
      {nextStep ? (
        <ChooseWhere uM={music} t={type} gi={gi} />
      ) : (
        <div>
          {loading ? <Loader /> : false}
          <div className="min-h-screen p-2 flex flex-col justify-center items-center">
            {errorAl ? <ErrorAlert message={errMessage} /> : false}
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {buttons}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// https://tailwindgrids.com/#/
// https://appydev.co/submit
// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
// https://codepen.io/damcclean/pen/GRoRRdR
// https://tailwindcomponents.com/component/full-page-overlay-loading-screen
