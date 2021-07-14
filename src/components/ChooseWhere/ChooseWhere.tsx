import React from 'react';

import '../../styles/main.css';
import OAuthMove from '../OAuth/OAuthMove';

const provider = ['deezer', 'spotify'];

interface CW {
  uM: [any];
  t: string;
  code: string;
}

export default function ChooseWhere(props: CW) {
  const buttons = provider.map((pr) => (
    <OAuthMove
      provider={pr}
      key={pr}
      tracks={props.uM}
      code={props.code}
      dzB={props.t === 'd'}
      spB={props.t === 's'}
    />
  ));

  return (
    <>
      <div className="min-h-screen p-2 flex flex-col justify-center items-center">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {buttons}
        </div>
      </div>
    </>
  );
}
