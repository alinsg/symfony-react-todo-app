import React, { useContext } from "react";
import { Flex, Text, Progress } from "@chakra-ui/react";
import { TodoContext } from "../../contexts/TodoContext";

const Header = () => {
  const context = useContext(TodoContext);

  return (
    <>
      {context.loading ? (
        <Progress
          size="xs"
          isIndeterminate={true}
          position="absolute"
          top="0px"
          left="0px"
          width="100%"
        />
      ) : (
        <></>
      )}
      <Flex
        shadow="lg"
        height={"80px"}
        alignItems={"center"}
        padding={"0 40px"}
      >
        <Text fontWeight={"bold"} fontSize={"24px"}>
          ToDo App
        </Text>
      </Flex>
    </>
  );
};

export default Header;
