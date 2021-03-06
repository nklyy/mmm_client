import React, { useState, createContext, useMemo } from 'react';

const PageContext: any = createContext(null);

function PageContextComp(props: { children: any }) {
  const [disableNextB, setDisableNextB] = useState(true);
  const [loadingM, setLoadingM] = useState(false);
  const [errorAl, setErrorAl] = useState(false);
  const [dDeezer, setDDeezer] = useState(false);
  const [dSpotify, setDSpotify] = useState(false);

  const value = useMemo(
    () => ({
      disableNextB,
      setDisableNextB,
      loadingM,
      setLoadingM,
      errorAl,
      setErrorAl,
      dDeezer,
      setDDeezer,
      dSpotify,
      setDSpotify,
    }),
    [dDeezer, dSpotify, disableNextB, errorAl, loadingM],
  );

  return (
    <PageContext.Provider value={value}>{props.children}</PageContext.Provider>
  );
}

export { PageContext, PageContextComp };
