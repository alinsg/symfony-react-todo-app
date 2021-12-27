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
} from "@chakra-ui/react";
import { TodoContext } from "../../../contexts/TodoContext";

const ContentDrawer = () => {
  const todoContext = useContext(TodoContext);
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
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

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
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ContentDrawer;
