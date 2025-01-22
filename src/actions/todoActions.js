export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: text,
});

export const removeTodo = (index) => ({
  type: "REMOVE_TODO",
  payload: index,
});

export const toggleTodo = (index) => ({
  type: "TOGGLE_TODO",
  payload: index,
});

export const startEdit = (index) => ({
  type: "START_EDIT",
  payload: index,
});

export const saveEdit = (index, text) => ({
  type: "SAVE_EDIT",
  payload: { index, text },
});
