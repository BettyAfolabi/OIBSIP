import { useState } from "react";
import EditToDo from "./EditToDo";
import useToDoContext from "./use-todo-context";
import PropTypes from "prop-types";
import { Button, Stack, Typography, Checkbox } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

function ShowToDo({ todoId }) {
  const { deleteToDoById, editToDoById, getToDoById } = useToDoContext();
  const [showEdit, setShowEdit] = useState(false);
  const [completed, setCompleted] = useState(false);

  ShowToDo.propTypes = {
    todoId: PropTypes.node.isRequired,
  };

  const todo = getToDoById(todoId);

  const handleDeleteClick = () => {
    deleteToDoById(todo.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (newTask) => {
    editToDoById(todo.id, newTask);
    setShowEdit(false);
  };

  const handleCompleteToggle = () => {
    setCompleted(!completed);
  };

  return (
    <Stack>
      {showEdit ? (
        <EditToDo
          onSubmit={handleSubmit}
          todo={todo}
          todoId={todo.id}
          editToDoById={editToDoById}
        />
      ) : (
        <Stack direction="row" justifyContent="space-between" py={2}>
          <Checkbox
            checked={completed}
            onChange={handleCompleteToggle}
            color="success"
          />
          <Typography
            variant="h5"
            sx={{
              color: "#571909",
              fontWeight: "bold",
              fontSize: "25px",
              textDecoration: completed ? "line-through" : "none",
            }}
          >
            {todo.task}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              onClick={handleEditClick}
              sx={{ backgroundColor: "#571909" }}
            >
              <Edit />
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteClick}
            >
              <Delete />
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}

export default ShowToDo;
