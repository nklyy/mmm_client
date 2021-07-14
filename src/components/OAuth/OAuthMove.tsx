import React from 'react';
import AuthButton from '../Button/AuthButton';
import axios from 'axios';

export default function OAuthMove(props: any) {
  const { provider, dzB, spB, tracks } = props;
  // console.log(tracks);

  const handleStartMove = async () => {
    const movedTrack = await axios.post(
      `http://localhost:4000/v1/${provider}/moveToSpotify`,
      {
        tracks,
        code: props.code,
      },
    );
  };

  switch (provider) {
    case 'deezer':
      return (
        <AuthButton
          provider={provider}
          key={provider}
          disbl={dzB}
          fnc={handleStartMove}
        />
      );
    case 'spotify':
      return (
        <AuthButton
          provider={provider}
          key={provider}
          disbl={spB}
          fnc={handleStartMove}
        />
      );
    default:
      return (
        <AuthButton provider={provider} key={provider} fnc={handleStartMove} />
      );
  }
}
