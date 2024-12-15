import React, { createContext, useState, useContext } from "react";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [totalHarga, setTotalHarga] = useState(0);

  return (
    <GlobalContext.Provider value={{ totalHarga, setTotalHarga }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
