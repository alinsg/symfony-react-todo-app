import React, { useContext } from "react";
import { Flex, Text, Progress, IconButton } from "@chakra-ui/react";
import { TodoContext } from "../../contexts/TodoContext";
import { AuthContext, AUTH_LOGGED_IN } from "../../contexts/AuthContext";
import { FiMenu } from "react-icons/fi";
import { Icon } from "@chakra-ui/icons";

const MenuIcon = () => {
  return <Icon as={FiMenu} />;
};

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
          <IconButton
            aria-label="Open sidebar"
            icon={<MenuIcon />}
            marginRight={"16px"}
            backgroundColor={"white"}
            onClick={() => todoContext.toggleDrawer()}
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
