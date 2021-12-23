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
    loading: false,
  });

  const startLoading = () => {
    setState((prevState) => ({
      todos: prevState.todos,
      loading: true,
    }));
  };

  const finishLoading = () => {
    setState((prevState) => ({
      todos: prevState.todos,
      loading: false,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllTodos().then((response) => {
        return response.data;
      });
      setState((prevState) => ({
        todos: data,
        loading: false,
      }));
    };
    fetchData();
  }, []);

  //create
  const createTodo = (text, toast) => {
    if (!state.loading) {
      startLoading();
    }
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
          loading: true,
        }));
        finishLoading();
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
    if (!state.loading) {
      startLoading();
    }
    editTodo(newText, id)
      .then((response) => {
        setState((prevState) => ({
          todos: prevState.todos.map((todo) =>
            todo.id === id ? { ...todo, text: response.data.text } : todo
          ),
          loading: true,
        }));
        finishLoading();
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
    if (!state.loading) {
      startLoading();
    }
    editTodoStatus(newStatus, id)
      .then((response) => {
        setState((prevState) => ({
          todos: prevState.todos.map((todo) =>
            todo.id === id ? { ...todo, status: response.data.status } : todo
          ),
          loading: true,
        }));
        finishLoading();
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
    if (!state.loading) {
      startLoading();
    }
    removeTodo(id)
      .then((response) => {
        setState((prevState) => ({
          todos: prevState.todos.filter((todo) => todo.id !== id),
          loading: true,
        }));
        finishLoading();
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
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
