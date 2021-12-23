import React, { createContext, useState, useEffect } from "react";
import {
  getAllTodos,
  addTodo,
  editTodo,
  editTodoStatus,
  removeTodo,
} from "../services/todoService";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [state, setState] = useState({
    todos: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTodos().then((response) => {
        return response.data;
      });
      setState((prevState) => ({
        todos: data,
      }));
    };
    fetchData();
  }, []);

  const initialize = (initialTodos) => {
    setState((prevState) => ({
      todos: initialTodos,
    }));
  };

  //create
  const createTodo = (text, toast) => {
    addTodo(text)
      .then((response) => {
        setState((prevState) => ({
          todos: [
            ...prevState.todos,
            {
              text: response.data.text,
              status: response.data.status,
              id: response.data.id,
            },
          ],
        }));
        toast({
          title: "Added task",
          description: "Added the task successfully!",
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Task could not be added",
          description: "There was an error while trying to add the task!",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      });
  };
  //update
  const updateTodo = (id, newText, toast) => {
    editTodo(newText, id)
      .then((response) => {
        setState((prevState) => ({
          todos: prevState.todos.map((todo) =>
            todo.id === id ? { ...todo, text: response.data.text } : todo
          ),
        }));
        toast({
          title: "Edited task",
          description: "Edited the task text successfully!",
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Task could not be edited",
          description:
            "There was an error while trying to edit the task's text!",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      });
  };

  //update todo status
  const updateTodoStatus = (id, newStatus, toast) => {
    editTodoStatus(newStatus, id)
      .then((response) => {
        setState((prevState) => ({
          todos: prevState.todos.map((todo) =>
            todo.id === id ? { ...todo, status: response.data.status } : todo
          ),
        }));
        toast({
          title: "Edited task",
          description: "Edited the task status successfully!",
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Task could not be edited",
          description:
            "There was an error while trying to edit the task status!",
          status: "error",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      });
  };

  //delete
  const deleteTodo = (id, toast) => {
    removeTodo(id)
      .then((response) => {
        setState((prevState) => ({
          todos: prevState.todos.filter((todo) => todo.id !== id),
        }));
        toast({
          title: "Deleted task",
          description: "The task was deleted!",
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Task could not be edited",
          description: "There was an error while trying to delete the task!",
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      });
  };

  return (
    <TodoContext.Provider
      value={{
        ...state,
        createTodo: createTodo,
        updateTodo: updateTodo,
        updateTodoStatus: updateTodoStatus,
        deleteTodo: deleteTodo,
        initialize: initialize,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
