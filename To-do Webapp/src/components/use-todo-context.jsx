import { useContext } from "react";
import ToDoContext from "./todo";

function useToDoContext() {
  return useContext(ToDoContext);
}

export default useToDoContext;
