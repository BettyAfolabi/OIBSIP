import ShowToDo from "./showToDo";
import useToDoContext from "./use-todo-context";

function ToDoList() {
  const { todos } = useToDoContext();

  const renderedTask = todos.map((todo) => {
    return <ShowToDo key={todo.id} todo={todo} todoId={todo.id} />;
  });
  return <div>{renderedTask}</div>;
}

export default ToDoList;
