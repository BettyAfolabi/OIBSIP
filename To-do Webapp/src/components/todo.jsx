import { createContext, useState, useEffect } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

const ToDoContext = createContext();

function Provider({ children }) {
  const [todos, setToDos] = useState([]);

  Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  useEffect(() => {
    const savedTask = JSON.parse(localStorage.getItem("todos")) || [];
    setToDos(savedTask);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const editToDoById = (id, newTask) => {
    const updatedTask = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      }
      return todo;
    });

    setToDos(updatedTask);
  };

  const deleteToDoById = (id) => {
    const updatedTask = todos.filter((todo) => todo.id !== id);
    setToDos(updatedTask);
  };

  const addTodo = (task) => {
    const newTask = { id: shortid.generate(), task };
    const updatedTask = [...todos, newTask];
    setToDos(updatedTask);
  };

  const getToDoById = (id) => {
    return todos.find((todo) => todo.id === id);
  };

  const valueToShare = {
    todos,
    deleteToDoById,
    editToDoById,
    addTodo,
    getToDoById,
  };

  return (
    <ToDoContext.Provider value={valueToShare}>{children}</ToDoContext.Provider>
  );
}

export { Provider };
export default ToDoContext;
