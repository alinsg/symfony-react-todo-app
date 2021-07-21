import React, { createContext, useState, useEffect } from "react";
import {
  getAllTodos,
  addTodo,
  editTodo,
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
  const createTodo = (text) => {
    addTodo(text)
      .then((response) => {
        setState((prevState) => ({
          todos: [
            ...prevState.todos,
            {
              task: response.data.task,
              id: response.data.id,
            },
          ],
        }));
      })
      .catch((error) => console.error(error));
  };
  //update
  const updateTodo = (id, newText) => {
    editTodo(newText, id)
      .then((response) => {
        setState((prevState) => ({
          todos: prevState.todos.map((todo) =>
            todo.id === id ? { ...todo, task: response.data.task } : todo
          ),
        }));
      })
      .catch((error) => console.error(error));
  };
  //delete
  const deleteTodo = (id) => {
    removeTodo(id)
      .then((response) => {
        setState((prevState) => ({
          todos: prevState.todos.filter((todo) => todo.id !== id),
        }));
      })
      .catch((error) => console.error(error));
  };

  return (
    <TodoContext.Provider
      value={{
        ...state,
        createTodo: createTodo,
        updateTodo: updateTodo,
        deleteTodo: deleteTodo,
        initialize: initialize,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
