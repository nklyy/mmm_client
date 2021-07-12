import React, { useState, createContext, useMemo } from 'react';

const AuthContext: any = createContext(null);

function AuthContextComp(props: { children: any }) {
  const [move, setMove] = useState(false);

  const value = useMemo(
    () => ({
      move,
      setMove,
    }),
    [move],
  );

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComp };
