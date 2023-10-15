import { useContext } from "react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import ToDoContext from "./components/todo";
import { Paper, Typography, Stack } from "@mui/material";

function App() {
  const { todos } = useContext(ToDoContext);

  return (
    <Stack>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#884332",
          marginBottom: "30px",
        }}
      >
        To-Do Web App
      </Typography>
      <Paper
        elevation={4}
        sx={{
          backgroundColor: "#884332",
          padding: "30px",
        }}
      >
        <Stack sx={{ margin: "0 auto" }}>
          <Stack
            sx={{
              backgroundColor: "#571909",
              width: "100%",
              marginY: "10px",
              padding: "20px",
            }}
          >
            <AddToDo />
          </Stack>
          <Stack
            sx={{
              backgroundColor: "white",
              color: "#884332",
              width: "100%",
              padding: "15px",
            }}
          >
            <ToDoList todos={todos} />
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default App;
