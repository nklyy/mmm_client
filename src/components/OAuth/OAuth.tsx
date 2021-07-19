import React from 'react';

import AuthButton from '../Button/AuthButton';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
//
// interface OAuthIn {
//   provider: string;
//   moveMusic: boolean;
//   dzB: boolean;
//   spB: boolean;
//   qi: string;
// }

export default function OAuth(props: any) {
  const { provider, moveMusic, dzB, spB, gi } = props;

  const handleStartAuth = async () => {
    console.log(provider, moveMusic, dzB, spB);

    if (moveMusic) {
      window.location.href = `http://localhost:4000/v1/${provider}?m=t&gi=${gi}`;
    } else {
      const guestId = uuid();
      window.location.href = `http://localhost:4000/v1/${provider}?m=f&gi=${guestId}`;
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
