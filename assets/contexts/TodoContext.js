import React, { createContext, useState, useEffect } from "react";
import { getAllTodos, addTodo } from "../services/todoService";

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
    fetchData().then((response) => console.log("Updated data"));
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
  //read
  const readTodo = () => {};
  //update
  const updateTodo = (id, newText) => {
    setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, task: newText } : todo
      ),
    }));
  };
  //delete
  const deleteTodo = (id) => {
    setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
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
