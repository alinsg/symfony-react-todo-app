import React from "react";
import { Avatar, Heading } from "@chakra-ui/react";

const UserDetails = () => {
  return (
    <>
      <Avatar name={"Dan Abrahmov"} src={"https://bit.ly/dan-abramov"} />
      <Heading as={"h1"} size={"md"} marginTop={"16px"}>
        Hello, User
      </Heading>
    </>
  );
};

export default UserDetails;
