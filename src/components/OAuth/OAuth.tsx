import React from 'react';

import AuthButton from '../Button/AuthButton';

interface OAuthIn {
  provider: string;
  moveMusic: boolean;
  dzB: boolean;
  spB: boolean;
}

export default function OAuth(props: OAuthIn) {
  const { provider, moveMusic, dzB, spB } = props;

  const handleStartAuth = async () => {
    console.log(provider, moveMusic, dzB, spB);
    window.location.href = `http://localhost:4000/v1/${provider}`;
  };

  return (
    <AuthButton provider={provider} key={provider} fnc={handleStartAuth} />
  );
}
