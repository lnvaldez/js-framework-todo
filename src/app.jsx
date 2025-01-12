/** jsx @createElement */
import { useState, createElement } from "./Framework.js";

export default function TodoApp() {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={(e) => e.preventDefault()}>
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
