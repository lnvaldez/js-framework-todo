import Framework from "./Framework.js";

class TodoItem extends Framework.Component {
  render() {
    const { todo, index, store } = this.props;

    return (
      <li
        style={{
          margin: "1rem 0",
          padding: "1rem",
          background: "var(--card-background-color)",
          borderRadius: "var(--border-radius)",
          boxShadow: "var(--card-box-shadow)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          {todo.editing ? (
            <input
              type="text"
              value={todo.text}
              onChange={(e) => {
                store.dispatch({
                  type: "SAVE_EDIT",
                  payload: { index, text: e.target.value },
                });
              }}
            />
          ) : (
            <span
              onClick={() =>
                store.dispatch({ type: "TOGGLE_TODO", payload: index })
              }
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
                opacity: todo.completed ? 0.7 : 1,
              }}
            >
              {todo.text}
            </span>
          )}

          <button
            onClick={() =>
              store.dispatch({ type: "START_EDIT", payload: index })
            }
            className="secondary outline"
            style={{ margin: 0 }}
          >
            Edit
          </button>

          <button
            onClick={() =>
              store.dispatch({ type: "REMOVE_TODO", payload: index })
            }
            className="error outline"
            style={{ margin: 0, "--background-color": "var(--del-color)" }}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}

class TodoApp extends Framework.Component {
  addTodo() {
    const input = document.getElementById("todoInput");
    if (input.value.trim()) {
      this.props.store.dispatch({ type: "ADD_TODO", payload: input.value });
      input.value = "";
    }
  }

  render() {
    const state = this.props.store.getState();

    return (
      <main className="container" style={{ padding: "2rem" }}>
        <article style={{ padding: "2rem", margin: "2rem 0" }}>
          <h1>Todo List</h1>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {state.todos.map((todo, index) => (
              <TodoItem
                todo={todo}
                index={index}
                key={index}
                store={this.props.store}
              />
            ))}
          </ul>
          <footer
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "1rem",
              alignItems: "end",
            }}
          >
            <input
              id="todoInput"
              type="text"
              placeholder="What needs to be done?"
              style={{ margin: 0 }}
            />
            <button onClick={() => this.addTodo()} style={{ margin: 0 }}>
              Add Todo
            </button>
          </footer>
        </article>
      </main>
    );
  }
}

export default TodoApp;
