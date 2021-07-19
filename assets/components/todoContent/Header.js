import React from "react";
import { Flex, Heading, Divider } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex flexDirection={"column"}>
      <Flex padding={"16px 24px"} alignItems={"center"}>
        <Heading as={"h2"} size={"md"}>
          Your Todos
        </Heading>
      </Flex>
      <Divider width={"100%"} />
    </Flex>
  );
};

export default Header;
