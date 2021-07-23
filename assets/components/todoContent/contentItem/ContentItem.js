import React, { useState, useContext } from "react";
import { TodoContext } from "../../../contexts/TodoContext";
import {
  Flex,
  Checkbox,
  IconButton,
  PopoverTrigger,
  Popover,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { DeleteIcon } from "@chakra-ui/icons";
import EditPopover from "../editPopover/EditPopover";
import DeleteDialog from "../deleteDialog/DeleteDialog";

const ContentItem = ({ text, id }) => {
  const context = useContext(TodoContext);
  const firstFieldRef = React.useRef(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [acceptDialogOpen, setAcceptDialogOpen] = useState(false);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const toast = useToast();

  const toggleToDo = () => {
    setIsCompleted(!isCompleted);
  };

  const onDeleteButtonClick = () => {
    setAcceptDialogOpen(true);
  };

  const onDialogDeleteButtonClick = (id) => {
    context.deleteTodo(id, toast);
    setAcceptDialogOpen(false);
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
            aria-label={"Edit todo"}
            icon={<EditIcon />}
            size={"sm"}
          />
        </PopoverTrigger>
        {isOpen ? (
          <EditPopover
            firstFieldRef={firstFieldRef}
            currentTodo={text}
            onCancel={onClose}
            todoId={id}
          />
        ) : (
          <></>
        )}
      </Popover>
      <DeleteDialog
        isOpen={acceptDialogOpen}
        setIsOpen={setAcceptDialogOpen}
        setDelete={onDialogDeleteButtonClick}
        todoId={id}
      />
    </Flex>
  );
};

export default ContentItem;
