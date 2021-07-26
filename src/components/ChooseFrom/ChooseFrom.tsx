import React, { useContext, useEffect, useState } from 'react';
import '../../styles/main.css';

import OAuth from '../OAuth/OAuth';
import ErrorAlert from '../Error/ErrorAlert';
import Loader from '../Loader/Loader';
import ChooseWhere from '../ChooseWhere/ChooseWhere';

import { PageContext } from '../../context/PageContext';
import ModalSuccess from '../Modal/ModalSuccess';
import ModalNotFound from '../Modal/ModalNotFound';

const provider = ['deezer', 'spotify'];
const BACKEND_URL = process.env.BACKEND_URL;
const BACKEND_WS_URL = process.env.BACKEND_WS_URL;

export default function ChooseFrom() {
  const { errorAl, setErrorAl, dDeezer, setDDeezer, dSpotify, setDSpotify } =
    useContext(PageContext);

  const [nextStep, setNextStep] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalNotFound, setShowModalNotFound] = useState(false);
  const [notFoundTracks, setNotFoundTracks] = useState({ nF: [] });
  const [errMessage, setErrorMessage] = useState('');
  const [type, setType] = useState<any>('');
  const [move, setMove] = useState<any>('');
  const [gi, setGi] = useState<any>('');
  const [lenT, setLenT] = useState('find...');
  // eslint-disable-next-line prefer-const
  let [countMusic, setCountMusic] = useState(0);

  const addCountMusic = (c: number) => {
    setCountMusic((countMusic += c));
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
        const responseToken = await fetch(
          `${BACKEND_URL}/${type === 's' ? 'spotify' : 'deezer'}/checkT`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ gi }),
          },
        );

        const jsnData = await responseToken.json();

        if (jsnData.error) {
          setErrorMessage(jsnData.error);
          setErrorAl(true);
          return;
        }

        if (move === 'f' && gi) {
          setLoading(true);
          setDDeezer(true);
          setDSpotify(true);

          const responseMusic = await fetch(
            `${BACKEND_URL}/${type === 's' ? 'spotify' : 'deezer'}/userMusic`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ gi }),
            },
          );

          const dMusic = await responseMusic.json();

          if (dMusic.error) {
            setErrorMessage(dMusic.error);
            setErrorAl(true);
            return;
          }

          if (dMusic.status === 200) {
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
            `${BACKEND_WS_URL}/${
              type === 's' ? 'spotify/move' : 'deezer/move'
            }`,
          );

          s.onopen = () => {
            s.send(JSON.stringify({ gi }));
          };

          s.onmessage = (msg) => {
            const jsn = JSON.parse(msg.data);

            if (jsn.lenTracks && typeof jsn.lenTracks === 'number') {
              setLenT(jsn.lenTracks);
            }

            if (jsn.countM) {
              addCountMusic(jsn.countM);
            }

            if (jsn.notFoundTracks) {
              setNotFoundTracks({ nF: jsn.notFoundTracks });
            }
          };

          s.onclose = () => {
            setLoading(false);
            setNextStep(false);
            setDDeezer(false);
            setDSpotify(false);

            if (notFoundTracks.nF.length > 0) {
              setShowModalNotFound(true);
            } else {
              setShowModalSuccess(true);
            }
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
          {showModalSuccess ? <ModalSuccess /> : false}
          {showModalNotFound ? (
            <ModalNotFound notF={notFoundTracks.nF} />
          ) : (
            false
          )}

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
