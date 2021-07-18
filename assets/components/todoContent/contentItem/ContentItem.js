import React, {useState} from 'react'
import {Flex, Checkbox} from "@chakra-ui/react";

const ContentItem = ({id}) => {
    const [isCompleted, setIsCompleted] = useState(false)

    const toggleToDo = () => {
        setIsCompleted(!isCompleted)
    }

    return (
        <Flex
            alignItems={"center"}
            padding={"8px 16px"}
        >
            <Checkbox>List item text {id}</Checkbox>
        </Flex>
    )
}

export default ContentItem