/** @jsx createElement */
import { useState, createElement, store } from "./Framework.js";

export default function TodoApp() {
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [todos, setTodos] = useState(store.state.todos || []);

  store.subscribe(() => {
    setTodos(store.state.todos || []);
  });

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const newTodos = [
      ...store.state.todos,
      {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
      },
    ];

    store.setState({ todos: newTodos });
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    const newTodos = store.state.todos.filter((todo) => todo.id !== id);
    store.setState({ todos: newTodos });
  };

  const toggleTodo = (id) => {
    const newTodos = store.state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    store.setState({ todos: newTodos });
  };

  const updateTodo = (id, newText) => {
    const newTodos = store.state.todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    store.setState({ todos: newTodos });
    setEditingId(null);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form className="grid" onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="todo-item grid"
            style={{
              margin: "0px 0",
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            <div className="grid">
              <label className="todo-text">{todo.text}</label>
              <div className="grid">
                <button
                  className="secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingId(todo.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="error"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
