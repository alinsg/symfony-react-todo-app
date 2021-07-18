import React, {createContext, useState} from 'react'

export const TodoContext = createContext()

const TodoContextProvider = (props) => {
    const [state, setState] = useState({
        todos: [
            {
                task: "First task",
                id: 1
            },
            {
                task: "Second task",
                id: 2
            },
            {
                task: "Third task",
                id: 3
            }
        ],
        loading: false
    });

    //create
    const createTodo = () => {

    }
    //read
    const readTodo = () => {

    }
    //update
    const updateTodo = () => {

    }
    //delete
    const deleteTodo = () => {

    }

    return (
        <TodoContext.Provider value={{
            ...state,
            createTodo: createTodo(),
            updateTodo: updateTodo(),
            deleteTodo: deleteTodo()
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider