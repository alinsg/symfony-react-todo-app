import React, { useState, useContext } from "react";
import { TodoContext } from "../../../contexts/TodoContext";
import { Flex, Checkbox, IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { DeleteIcon } from "@chakra-ui/icons";

const ContentItem = ({ text, id }) => {
  const context = useContext(TodoContext);
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleToDo = () => {
    setIsCompleted(!isCompleted);
  };

  const onDeleteButtonClick = (id) => {
    context.deleteTodo(id);
    //TODO query doctrine db to remove element
  };

  return (
    <Flex alignItems={"center"} padding={"8px 16px"}>
      <Checkbox
        colorScheme={isCompleted ? "green" : "blue"}
        textDecoration={isCompleted ? "line-through" : "normal"}
        flexGrow={3}
        onChange={() => toggleToDo()}
      >
        {text}
      </Checkbox>
      <IconButton
        aria-label={"Remove todo"}
        icon={<DeleteIcon />}
        size={"sm"}
        colorScheme={"red"}
        marginRight={"16px"}
        onClick={() => onDeleteButtonClick(id)}
      />
      <IconButton
        isDisabled={isCompleted}
        aria-label={"Add todo"}
        icon={<EditIcon />}
        size={"sm"}
      />
    </Flex>
  );
};

export default ContentItem;
