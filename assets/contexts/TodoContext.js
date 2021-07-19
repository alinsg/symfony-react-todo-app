import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [state, setState] = useState({
    todos: [
      {
        task: "First task",
        id: 1,
      },
      {
        task: "Second task",
        id: 2,
      },
      {
        task: "Third task",
        id: 3,
      },
      {
        task: "Third task asjkhdkja shdkjhask jhdkajs hdkjashdkjhaskdjhaksjdhakjshd kjash kdjhask jhk",
        id: 4,
      },
    ],
  });

  //create
  const createTodo = (text) => {
    setState((prevState) => ({
      todos: [
        ...prevState.todos,
        {
          task: text,
          id: prevState.todos.length + 1,
        },
      ],
    }));
  };
  //read
  const readTodo = () => {};
  //update
  const updateTodo = () => {};
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
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
