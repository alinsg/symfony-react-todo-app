import React, { useState, useContext } from "react";
import {
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  ButtonGroup,
} from "@chakra-ui/react";
import FocusLock from "react-focus-lock";
import { TodoContext } from "../../../contexts/TodoContext";

const TextInput = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} onChange={props.onChange} {...props} />
    </FormControl>
  );
});

const Form = ({
  firstFieldRef,
  onCancel,
  inputValue,
  handleInputChange,
  onSaveClick,
  disabledSaveButton,
}) => {
  return (
    <Stack spacing={4} padding={"0px 16px 16px 16px"}>
      <TextInput
        label="Modify task"
        id="new-todo-text"
        value={inputValue}
        ref={firstFieldRef}
        onChange={handleInputChange}
      />
      <ButtonGroup d="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          isDisabled={disabledSaveButton}
          colorScheme="teal"
          onClick={() => onSaveClick()}
        >
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

const EditPopover = ({ todoId, firstFieldRef, currentTodo, onCancel }) => {
  const context = useContext(TodoContext);
  const [newTodoText, setNewTodoText] = useState(currentTodo);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

  const handleNewTodoTextChange = (event) => {
    setNewTodoText(event.target.value);
    if (newTodoText !== currentTodo) {
      setIsSaveButtonDisabled(false);
    }
  };

  const onSaveButtonClick = () => {
    context.updateTodo(todoId, newTodoText);
  };

  return (
    <>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Edit todo
        </PopoverHeader>
        <FocusLock returnFocus persistentFocus={false}>
          <PopoverCloseButton />
          <Form
            firstFieldRef={firstFieldRef}
            onCancel={onCancel}
            inputValue={newTodoText}
            handleInputChange={handleNewTodoTextChange}
            onSaveClick={onSaveButtonClick}
            disabledSaveButton={isSaveButtonDisabled}
          />
        </FocusLock>
      </PopoverContent>
    </>
  );
};

export default EditPopover;
