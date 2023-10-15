import { useState, useEffect } from "react";
import useToDoContext from "./use-todo-context";
import PropTypes from "prop-types";
import { Button, TextField } from "@mui/material";

function EditToDo({ todoId, onSubmit }) {
  const { editToDoById, getToDoById } = useToDoContext();
  const [editedTask, setEditedTask] = useState("");

  const todo = getToDoById(todoId);

  EditToDo.propTypes = {
    todoId: PropTypes.node.isRequired,
    onSubmit: PropTypes.node.isRequired,
  };

  useEffect(() => {
    setEditedTask(todo.task);
  }, [todo.task]);

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editToDoById(todo.id, editedTask);
    setEditedTask(editedTask);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          color="secondary"
          value={editedTask}
          onChange={handleChange}
        />
        <Button variant="contained" color="success" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}

export default EditToDo;
