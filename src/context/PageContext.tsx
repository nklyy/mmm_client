import React, { useState, createContext, useMemo } from 'react';

const PageContext: any = createContext(null);

function PageContextComp(props: { children: any }) {
  const [cf, setCf] = useState(false);

  const value = useMemo(
    () => ({
      cf,
      setCf,
    }),
    [cf],
  );

  return (
    <PageContext.Provider value={value}>{props.children}</PageContext.Provider>
  );
}

export { PageContext, PageContextComp };
