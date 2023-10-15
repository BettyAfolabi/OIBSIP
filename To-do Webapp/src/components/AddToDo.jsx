import { useState } from "react";
import useToDoContext from "./use-todo-context";
import { Button, Stack } from "@mui/material";

function AddToDo() {
  const [task, setTask] = useState("");

  const { addTodo } = useToDoContext();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };
  return (
    <Stack>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row" justifyContent="center">
          <input
            value={task}
            onChange={handleChange}
            placeholder="I need to..."
            size="small"
          />
          <Button
            type="submit"
            sx={{ backgroundColor: "#884332", fontSize: "20px" }}
            variant="contained"
          >
            Add Task
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default AddToDo;
