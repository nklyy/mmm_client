import React, { useState, createContext, useMemo } from 'react';

const PageContext: any = createContext(null);

function PageContextComp(props: { children: any }) {
  const [disableNextB, setDisableNextB] = useState(true);
  const [loadingM, setLoadingM] = useState(false);

  const value = useMemo(
    () => ({
      disableNextB,
      setDisableNextB,
      loadingM,
      setLoadingM,
    }),
    [disableNextB, loadingM],
  );

  return (
    <PageContext.Provider value={value}>{props.children}</PageContext.Provider>
  );
}

export { PageContext, PageContextComp };
