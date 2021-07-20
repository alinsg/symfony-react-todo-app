import React, { useState, useContext } from "react";
import { TodoContext } from "../../../contexts/TodoContext";
import {
  Flex,
  Checkbox,
  IconButton,
  PopoverTrigger,
  Popover,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { DeleteIcon } from "@chakra-ui/icons";
import EditPopover from "../editPopover/EditPopover";

const ContentItem = ({ text, id }) => {
  const firstFieldRef = React.useRef(null);
  const context = useContext(TodoContext);
  const [isCompleted, setIsCompleted] = useState(false);
  const { onOpen, onClose, isOpen } = useDisclosure();

  const toggleToDo = () => {
    setIsCompleted(!isCompleted);
  };

  const onDeleteButtonClick = (id) => {
    context.deleteTodo(id);
    //TODO query doctrine db to remove element
  };

  return (
    <Flex alignItems={"center"} padding={"8px 16px"}>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom"
        closeOnBlur={false}
      >
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
        <PopoverTrigger>
          <IconButton
            isDisabled={isCompleted}
            aria-label={"Add todo"}
            icon={<EditIcon />}
            size={"sm"}
          />
        </PopoverTrigger>
        <EditPopover
          firstFieldRef={firstFieldRef}
          currentTodo={text}
          onCancel={onClose}
          todoId={id}
        />
      </Popover>
    </Flex>
  );
};

export default ContentItem;
