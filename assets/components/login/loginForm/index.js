import React, { useContext } from "react";
import { chakra, Button, Stack } from "@chakra-ui/react";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import { AuthContext, AUTH_LOGGED_IN } from "../../../contexts/AuthContext";

const LoginForm = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault();
        authContext.setStatus(AUTH_LOGGED_IN);
      }}
      {...props}
    >
      <Stack spacing="6" marginTop={"24px"}>
        <EmailField />
        <PasswordField />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign in
        </Button>
      </Stack>
    </chakra.form>
  );
};

export default LoginForm;
