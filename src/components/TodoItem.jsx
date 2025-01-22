import Framework from "../Framework.js";

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

export default TodoItem;
