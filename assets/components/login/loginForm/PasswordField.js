import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const PasswordField = () => {
  const { isOpen, onToggle } = useDisclosure();

  const onClickReveal = () => {
    onToggle();
  };

  return (
    <FormControl id="password">
      <FormLabel textAlign={"center"}>Password</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            bg={"transparent !important"}
            variant={"ghost"}
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <ViewOffIcon /> : <ViewIcon />}
            onClick={() => onClickReveal()}
          />
        </InputRightElement>
        <Input name="password" type={isOpen ? "text" : "password"} required />
      </InputGroup>
    </FormControl>
  );
};

export default PasswordField;
