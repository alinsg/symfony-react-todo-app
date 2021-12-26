import React from "react";
import {
  chakra,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";

const LoginForm = (props) => {
  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault();
        // your login logic here
      }}
      {...props}
    >
      <Stack spacing="6" marginTop={"24px"}>
        <EmailField />
        {/*<PasswordField />*/}
        <PasswordField />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign in
        </Button>
      </Stack>
    </chakra.form>
  );
};

export default LoginForm;
