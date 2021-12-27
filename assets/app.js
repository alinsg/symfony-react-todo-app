import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./bootstrap";
import TodoContextProvider from "./contexts/TodoContext";
import AuthContextProvider, {
  AuthContext,
  AUTH_LOGGED_OUT,
} from "./contexts/AuthContext";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "./components/header/index";
import TodoContent from "./components/todoContent";
import Authentication from "./components/login";
import ContentDrawer from "./components/todoContent/drawer";

const AppContent = () => {
  const authContext = useContext(AuthContext);

  return (
    <>
      {authContext.loginStatus === AUTH_LOGGED_OUT ? (
        <Authentication />
      ) : (
        <TodoContent />
      )}
    </>
  );
};

const App = () => {
  return (
    <Flex flexDirection={"column"} height={"100vh"}>
      <ContentDrawer />
      <Header />
      <Flex marginTop={"24px"} width={"100%"} justifyContent={"center"}>
        <AppContent />
      </Flex>
    </Flex>
  );
};

ReactDOM.render(
  <AuthContextProvider>
    <TodoContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </TodoContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
