import { createContext, useContext, useEffect, useState } from "react";

const TODOcontext = createContext();

export const TodoProvider = ({ children }) => {

    const loadTodosFromLocalStorage=()=>
    {
        const localStore= localStorage.getItem('todos')

        return localStore? JSON.parse(localStore):[]
    }
    const [todos, SetTodo] = useState(loadTodosFromLocalStorage);
    useEffect(()=>{
            localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
 

  const addTodo = (text) => {
    SetTodo([...todos, { id: Date.now(), text, complete: false }]);
  };

  const toggleTodo = (id) => {
    SetTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    SetTodo(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    SetTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <TODOcontext.Provider
      value={{ todos, SetTodo, toggleTodo, deleteTodo, addTodo, updateTodo }}
    >
      {children}
    </TODOcontext.Provider>
  );
};

export const useTodo = () => useContext(TODOcontext);
