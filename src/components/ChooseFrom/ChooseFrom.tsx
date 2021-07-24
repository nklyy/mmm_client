import React, { useContext, useEffect, useState } from 'react';
import '../../styles/main.css';

import OAuth from '../OAuth/OAuth';
import ErrorAlert from '../Error/ErrorAlert';
import Loader from '../Loader/Loader';
import ChooseWhere from '../ChooseWhere/ChooseWhere';

import { PageContext } from '../../context/PageContext';
import axios from 'axios';
import ModalSuccess from '../Modal/ModalSuccess';

const provider = ['deezer', 'spotify'];
// let music: any;

export default function ChooseFrom() {
  const { errorAl, setErrorAl, dDeezer, setDDeezer, dSpotify, setDSpotify } =
    useContext(PageContext);

  const [nextStep, setNextStep] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errMessage, setErrorMessage] = useState('');
  const [type, setType] = useState<any>('');
  const [move, setMove] = useState<any>('');
  const [gi, setGi] = useState<any>('');
  const [lenT, setLenT] = useState('find...');
  // eslint-disable-next-line prefer-const
  let [countMusic, setCountMusic] = useState(0);

  const addCountMusic = () => {
    setCountMusic((countMusic += 1));
  };

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
        const response = await fetch(
          `http://localhost:4000/v1/${
            type === 's' ? 'spotify' : 'deezer'
          }/checkT`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ gi }),
          },
        );

        const jsnData = await response.json();

        if (jsnData.error) {
          setErrorMessage(jsnData.error);
          setErrorAl(true);
          return;
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
            // music = dMusic.data;

            setDDeezer(type === 'd');
            setDSpotify(type === 's');

            setLoading(false);
            setNextStep(true);
          }
        } else if (move === 't' && gi) {
          // Open Loading Screen
          setLoading(true);

          // Disable buttons
          setDDeezer(true);
          setDSpotify(true);

          // Open WebSocket
          const s = new WebSocket(
            `ws://localhost:4000/v1/ws/${
              type === 's' ? 'spotify/move' : 'deezer/move'
            }`,
          );

          s.onopen = () => {
            console.log('Successful Connected!');
            s.send(JSON.stringify({ gi }));
          };

          s.onmessage = (msg) => {
            // console.log(msg.data);
            const jsn = JSON.parse(msg.data);

            if (jsn.lenTracks && typeof jsn.lenTracks === 'number') {
              setLenT(jsn.lenTracks);
            }

            if (jsn.countM) {
              addCountMusic();
            }
          };

          s.onclose = () => {
            setLoading(false);
            setNextStep(false);
            setDDeezer(false);
            setDSpotify(false);
            setShowModal(true);
          };
        } else {
          setErrorMessage('Something wrong! Please try again!');
          setErrorAl(true);
        }
      }
    }

    check();
    // eslint-disable-next-line
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
        <ChooseWhere t={type} gi={gi} />
      ) : (
        <div>
          {loading ? <Loader c={countMusic} lenT={lenT} m={move} /> : false}
          {showModal ? <ModalSuccess /> : false}

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
