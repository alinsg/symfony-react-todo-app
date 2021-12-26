import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const EmailField = () => {
  return (
    <FormControl id="email">
      <FormLabel textAlign={"center"}>Email address</FormLabel>
      <Input name="email" type="email" autoComplete="email" required />
    </FormControl>
  );
};

export default EmailField;
