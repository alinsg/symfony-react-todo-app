import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap";
import TodoContextProvider from "./contexts/TodoContext";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "./components/header/index";
import TodoContent from "./components/todoContent";
import Authentication from "./components/login";

const App = () => {
  return (
    <Flex flexDirection={"column"} height={"100vh"}>
      <Header />
      <Flex marginTop={"24px"} width={"100%"} justifyContent={"center"}>
        {/*<TodoContent />*/}
        <Authentication />
      </Flex>
    </Flex>
  );
};

ReactDOM.render(
  <TodoContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </TodoContextProvider>,
  document.getElementById("root")
);
