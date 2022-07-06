import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ childern }) => {
  const [loading, setloading] = useState(false);
  const [useToken, setuseToken] = useState(null);

  const login = () => {
    setuseToken("sadfyty");
    setloading(false);
  };
  const logout = () => {
    setuseToken(null);
    setloading(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {childern}
    </AuthContext.Provider>
  );
};
