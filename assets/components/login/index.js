import React from "react";
import { Flex } from "@chakra-ui/react";
import UserDetails from "./UserDetails";
import LoginForm from "./loginForm/index";

const Authentication = () => {
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        width={"300px"}
        height={"400px"}
        flexDirection={"column"}
        alignItems={"center"}
        shadow={"md"}
        padding={"24px"}
      >
        <UserDetails />
        <LoginForm />
      </Flex>
    </Flex>
  );
};

export default Authentication;
