import React, { createContext, useReducer } from "react";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const TodoProvider = (props) => {
  const initialState = {
    todos: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
      },
    ],
    currentTodo: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, currentTodo: state.currentTodo }}
    >
      {props.children}{" "}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
