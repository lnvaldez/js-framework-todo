const initialState = {
  todos: [{ text: "Example Todo", completed: false, editing: false }],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload, completed: false, editing: false },
        ],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "START_EDIT":
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload ? { ...todo, editing: true } : todo
        ),
      };
    case "SAVE_EDIT":
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload.index
            ? { ...todo, text: action.payload.text, editing: false }
            : todo
        ),
      };
    default:
      return state;
  }
};
