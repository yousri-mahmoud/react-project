const TodoList = ({ todos, deleteTodo }) => {
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
