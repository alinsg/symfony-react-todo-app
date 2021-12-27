import React, { createContext, useState, useEffect } from "react";

export const AUTH_LOGGED_IN = "logged-in";
export const AUTH_LOGGED_OUT = "logged-out";
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [state, setState] = useState({
    user: {
      id: "",
      username: "",
      name: "",
    },
    loginStatus: AUTH_LOGGED_OUT,
    loading: false,
  });

  const startLoading = () => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));
  };

  const stopLoading = () => {
    setState((prevState) => ({
      ...prevState,
      loading: false,
    }));
  };

  const setStatus = (status) => {
    startLoading();
    setState((prevState) => ({
      ...prevState,
      loginStatus: status,
    }));
    stopLoading();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        setStatus: setStatus,
        startLoading: startLoading,
        stopLoading: stopLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
