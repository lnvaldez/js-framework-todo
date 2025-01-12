/** @jsx createElement */
import { useState, createElement, store } from "./Framework.js";

export default function TodoApp() {
  const [newTodo, setNewTodo] = useState("");
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

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <label
              onClick={() => toggleTodo(todo.id)}
              style={{ cursor: "pointer" }}
            >
              {todo.text}
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
