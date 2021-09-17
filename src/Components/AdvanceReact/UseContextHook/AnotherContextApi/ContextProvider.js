import React, { createContext, useContext } from "react";

export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export const ContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value="value data">{children}</AppContext.Provider>
  );
};
