import React from "react"
import {Flex, Text} from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex shadow="lg" height={"80px"} alignItems={"center"} padding={"0 40px"}>
            <Text fontWeight={"bold"} fontSize={"24px"}>ToDo App</Text>
        </Flex>
    )
}

export default Header