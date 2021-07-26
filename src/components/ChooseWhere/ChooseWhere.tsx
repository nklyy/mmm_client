import React from 'react';

import '../../styles/main.css';
import OAuth from '../OAuth/OAuth';

const provider = ['deezer', 'spotify'];

export default function ChooseWhere(props: any) {
  const buttons = provider.map((pr) => (
    <OAuth
      provider={pr}
      key={pr}
      moveMusic={true}
      gi={props.gi}
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
