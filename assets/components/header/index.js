import React, { useContext } from "react";
import { Flex, Text, Progress, Avatar } from "@chakra-ui/react";
import { TodoContext } from "../../contexts/TodoContext";
import { AuthContext, AUTH_LOGGED_IN } from "../../contexts/AuthContext";

const Header = () => {
  const todoContext = useContext(TodoContext);
  const authContext = useContext(AuthContext);

  return (
    <>
      {todoContext.loading ? (
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
        {authContext.loginStatus === AUTH_LOGGED_IN ? (
          <Avatar
            size={"sm"}
            name={authContext.user.name}
            src={authContext.user.avatarUrl}
            marginRight={"16px"}
            onClick={() => todoContext.toggleDrawer()}
            _hover={{
              cursor: "pointer",
            }}
          />
        ) : (
          <></>
        )}
        <Text fontWeight={"bold"} fontSize={"24px"}>
          ToDo App
        </Text>
      </Flex>
    </>
  );
};

export default Header;
