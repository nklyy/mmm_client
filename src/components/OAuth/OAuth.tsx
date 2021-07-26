import React from 'react';

import AuthButton from '../Button/AuthButton';
import { v4 as uuid } from 'uuid';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function OAuth(props: any) {
  const { provider, moveMusic, dzB, spB, gi } = props;

  const handleStartAuth = async () => {
    if (moveMusic) {
      window.location.href = `${BACKEND_URL}/${provider}?m=t&gi=${gi}`;
    } else {
      const guestId = uuid();
      window.location.href = `${BACKEND_URL}/${provider}?m=f&gi=${guestId}`;
    }
  };

  switch (provider) {
    case 'deezer':
      return (
        <AuthButton
          provider={provider}
          key={provider}
          fnc={handleStartAuth}
          disbl={dzB}
        />
      );
    case 'spotify':
      return (
        <AuthButton
          provider={provider}
          key={provider}
          fnc={handleStartAuth}
          disbl={spB}
        />
      );
    default:
      return (
        <AuthButton provider={provider} key={provider} fnc={handleStartAuth} />
      );
  }
}
