import React, { useContext } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Divider,
  Flex,
  Heading,
  Avatar,
} from "@chakra-ui/react";
import { TodoContext } from "../../../contexts/TodoContext";
import { AuthContext, AUTH_LOGGED_OUT } from "../../../contexts/AuthContext";

const ContentDrawer = () => {
  const todoContext = useContext(TodoContext);
  const authContext = useContext(AuthContext);
  const btnRef = React.useRef();

  return (
    <Drawer
      isOpen={todoContext.drawerOpen}
      placement="left"
      onClose={() => todoContext.toggleDrawer()}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <Flex
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"48px"}
          paddingLeft={"24px"}
          paddingRight={"24px"}
        >
          <Heading as={"h2"} size={"md"}>
            ToDo App
          </Heading>
          <DrawerCloseButton />
        </Flex>
        <Divider width={"100%"} />
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"center"}
          marginTop={"24px"}
        >
          <Avatar
            name={authContext.user.name}
            src={authContext.user.avatarUrl}
            size={"md"}
          />
          <DrawerHeader>Hello, {authContext.user.name}</DrawerHeader>
        </Flex>

        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>

        <DrawerFooter>
          <Button
            variant="outline"
            mr={3}
            onClick={() => todoContext.toggleDrawer()}
          >
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => {
              authContext.setStatus(AUTH_LOGGED_OUT);
              todoContext.toggleDrawer();
            }}
          >
            Log Out
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ContentDrawer;
