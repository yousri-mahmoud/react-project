import { useSelector, useDispatch } from "react-redux";
import TodoForm from "../../component/todo/TodoForm";
import TodoList from "../../component/todo/TodoList";
import { ADD_TODO, REMOVE_TODO } from "../../Redux/actions";

import "./Todo.css";

function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  localStorage.setItem("todos", todos);
  const dispatch = useDispatch();
  const addTodo = (task) => {
    dispatch({ type: ADD_TODO, payload: task });
  };

  const deleteTodo = (index) => {
    dispatch({ type: REMOVE_TODO, payload: index });
  };

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
