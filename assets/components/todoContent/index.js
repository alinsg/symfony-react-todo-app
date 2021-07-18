import React from 'react'
import {Flex} from '@chakra-ui/react'
import Header from "./Header"
import ContentItem from "./contentItem/ContentItem"

const TodoContent = () => {
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
                <ContentItem id={1}/>
                <ContentItem id={2}/>
                <ContentItem id={3}/>
                <ContentItem id={4}/>
                <ContentItem id={5}/>
                <ContentItem id={6}/>
                <ContentItem id={7}/>
                <ContentItem id={1}/>
                <ContentItem id={2}/>
                <ContentItem id={3}/>
                <ContentItem id={4}/>
                <ContentItem id={5}/>
                <ContentItem id={6}/>
                <ContentItem id={7}/>
                <ContentItem id={1}/>
                <ContentItem id={2}/>
                <ContentItem id={3}/>
                <ContentItem id={4}/>
                <ContentItem id={5}/>
                <ContentItem id={6}/>
                <ContentItem id={7}/>
            </Flex>
        </Flex>
    )
}

export default TodoContent