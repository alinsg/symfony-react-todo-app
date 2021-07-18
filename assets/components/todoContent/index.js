import React, {useContext} from 'react'
import {Flex} from '@chakra-ui/react'
import {TodoContext} from "../../contexts/TodoContext"
import Header from "./Header"
import ContentItem from "./contentItem/ContentItem"

const TodoContent = () => {
    const context = useContext(TodoContext)

    return (
        <Flex
            flexDirection={"column"}
            width={{sm: "80vw", md: "50vw", lg: "40vw"}}
            height={{sm: "80vh", md: "60vh", lg: "50vh"}}
            borderRadius={"8px"}
            shadow={"md"}
        >
            <Header/>
            <Flex
                flexDirection={"column"}
                height={"100%"}
                overflowY={"scroll"}
            >
                {context.todos.map(todo => <ContentItem key={todo.id} text={todo.task} />)}
            </Flex>
        </Flex>
    )
}

export default TodoContent