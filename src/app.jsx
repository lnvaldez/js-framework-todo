/** jsx @createElement */
import { useState, createElement } from "./Framework.js";

export default function TodoApp() {
  const [newTodo, setNewTodo] = useState("");

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
      <ul></ul>
    </div>
  );
}
