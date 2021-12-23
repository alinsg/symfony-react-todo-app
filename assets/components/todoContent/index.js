import React, { useContext, useState } from "react";
import {
  Flex,
  IconButton,
  Input,
  Skeleton,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { TodoContext } from "../../contexts/TodoContext";
import Header from "./Header";
import ContentItem from "./contentItem/ContentItem";

const TodoContent = () => {
  const context = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");
  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const toast = useToast();

  const handleNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const onNewTodoSubmit = () => {
    if (newTodo === "") {
      toast({
        title: "Empty task",
        description: "You can't add an empty task!",
        status: "warning",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    } else {
      context.createTodo(newTodo, toast);
      setNewTodo("");
      setIsAddingTodo(false);
      //TODO query doctrine db for this
    }
  };

  const onAddButtonClick = () => {
    setIsAddingTodo(true);
  };

  const onCancelButtonClick = () => {
    setIsAddingTodo(false);
    setNewTodo("");
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
        {context.todos.length !== 0 ? (
          context.todos.map((todo) => (
            <ContentItem
              key={todo.task + todo.id}
              text={todo.task}
              status={todo.status}
              id={todo.id}
            />
          ))
        ) : (
          <Stack padding={"16px 24px"}>
            <Skeleton>
              <ContentItem text={"Lorem ipsum 1"} id={1} />
            </Skeleton>
            <Skeleton>
              <ContentItem text={"Lorem ipsum 2"} id={2} />
            </Skeleton>
            <Skeleton>
              <ContentItem text={"Lorem ipsum 3"} id={3} />
            </Skeleton>
            <Skeleton>
              <ContentItem text={"Lorem ipsum 4"} id={4} />
            </Skeleton>
          </Stack>
        )}
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
              <>
                <IconButton
                  aria-label={"Add todo"}
                  icon={<CheckIcon />}
                  colorScheme={"green"}
                  onClick={() => onNewTodoSubmit()}
                  marginRight={"24px"}
                />
                <IconButton
                  aria-label={"Cancel adding todo"}
                  icon={<CloseIcon />}
                  colorScheme={"red"}
                  onClick={() => onCancelButtonClick()}
                />
              </>
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
