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

const ContentItem = ({ text, status, id }) => {
  const context = useContext(TodoContext);
  const firstFieldRef = React.useRef(null);
  const [acceptDialogOpen, setAcceptDialogOpen] = useState(false);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const toast = useToast();

  const toggleToDo = () => {
    context.updateTodoStatus(id, !status, toast);
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
          colorScheme={status ? "green" : "blue"}
          isChecked={status}
          marginRight={"16px"}
          textDecoration={status ? "line-through" : "normal"}
          flexGrow={3}
          onChange={() => toggleToDo()}
        >
          {text}
        </Checkbox>
        <IconButton
          variant={"ghost"}
          aria-label={"Remove todo"}
          icon={<DeleteIcon />}
          size={"sm"}
          colorScheme={"red"}
          marginRight={"16px"}
          onClick={() => onDeleteButtonClick(id)}
          isRound
        />
        <PopoverTrigger>
          <IconButton
            isDisabled={status}
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
