import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./bootstrap";
import TodoContextProvider from "./contexts/TodoContext";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "./components/header/index";
import TodoContent from "./components/todoContent";

class App extends Component {
  render() {
    return (
      <Flex flexDirection={"column"}>
        <Header />
        <Flex marginTop={"24px"} width={"100%"} justifyContent={"center"}>
          <TodoContent />
        </Flex>
      </Flex>
    );
  }
}

ReactDOM.render(
  <TodoContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </TodoContextProvider>,
  document.getElementById("root")
);
