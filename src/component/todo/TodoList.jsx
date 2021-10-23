import { useSelector } from "react-redux";
import { REMOVE_TODO } from "../../Redux/actions";
import { useDispatch } from "react-redux";
const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const deleteTodo = (index) => {
    dispatch({ type: REMOVE_TODO, payload: index });
  };
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border d-flex justify-content-between align-items-center">
              <div className="text">
                <p>Title : {todo.title}</p>
                <p>Content : {todo.content}</p>
              </div>
              <button
                className="bg-danger text-white d-block h-25"
                onClick={() => deleteTodo(i)}
              >
                remove
              </button>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
