import React, { createContext, useState, useEffect } from "react";

export const AUTH_LOGGED_IN = "logged-in";
export const AUTH_LOGGED_OUT = "logged-out";
export const AuthContext = createContext();

const defaultUser = {
  id: "1",
  username: "guest",
  name: "Guest",
  avatarUrl: undefined,
};

const AuthContextProvider = (props) => {
  const [state, setState] = useState({
    user: defaultUser,
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
    const temporaryUser = {
      id: "2",
      username: "alinsg",
      name: "Alin Simion",
      avatarUrl: "https://bit.ly/dan-abramov",
    };
    startLoading();
    setState((prevState) => ({
      ...prevState,
      user:
        prevState.loginStatus === AUTH_LOGGED_OUT ? temporaryUser : defaultUser,
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
