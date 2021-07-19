import React, { useContext, useState } from "react";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { CheckIcon } from "@chakra-ui/icons";
import { TodoContext } from "../../contexts/TodoContext";
import Header from "./Header";
import ContentItem from "./contentItem/ContentItem";

const TodoContent = () => {
  const context = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");
  const [isAddingTodo, setIsAddingTodo] = useState(false);

  const handleNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const onNewTodoSubmit = () => {
    context.createTodo(newTodo);
    setNewTodo("");
    setIsAddingTodo(false);
    //TODO query doctrine db for this
  };

  const onAddButtonClick = () => {
    setIsAddingTodo(true);
  };

  return (
    <Flex
      flexDirection={"column"}
      width={{ sm: "80vw", md: "50vw", lg: "40vw" }}
      height={{ sm: "80vh", md: "60vh", lg: "50vh" }}
      borderRadius={"8px"}
      shadow={"md"}
    >
      <Header />
      <Flex flexDirection={"column"} height={"100%"} overflowY={"scroll"}>
        {context.todos.map((todo) => (
          <ContentItem
            key={todo.task + todo.id}
            text={todo.task}
            id={todo.id}
          />
        ))}
        <Flex
          justifyContent={"flex-start"}
          padding={"8px 16px"}
          flexDirection={"column"}
        >
          {isAddingTodo ? (
            <Input
              placeholder="Add a task"
              value={newTodo}
              onChange={handleNewTodo}
            />
          ) : (
            <></>
          )}
          <Flex margin={"16px 0px"}>
            <IconButton
              aria-label={"Start adding todo"}
              icon={<AddIcon />}
              colorScheme={"blue"}
              disabled={isAddingTodo}
              onClick={() => onAddButtonClick()}
              marginRight={"24px"}
            />
            {isAddingTodo ? (
              <IconButton
                aria-label={"Add todo"}
                icon={<CheckIcon />}
                colorScheme={"green"}
                onClick={() => onNewTodoSubmit()}
              />
            ) : (
              <></>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TodoContent;
