import React, { useContext } from "react";
import { Avatar, Heading } from "@chakra-ui/react";
import { AuthContext } from "../../contexts/AuthContext";

const UserDetails = () => {
  const authContext = useContext(AuthContext);

  return (
    <>
      <Avatar name={authContext.user.name} />
      <Heading as={"h1"} size={"md"} marginTop={"16px"}>
        Hello, {authContext.user.name}
      </Heading>
    </>
  );
};

export default UserDetails;
