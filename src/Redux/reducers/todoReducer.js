import { ADD_TODO, REMOVE_TODO } from "../actions";
const intialState = { todos: [] };
function todoReducer(state = intialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      console.log(action.payload);
      const filterTodos = state.todos.filter((todo, i) => i !== action.payload);

      return { ...state, todos: filterTodos };
    default:
      return { ...state };
  }
}

export default todoReducer;
