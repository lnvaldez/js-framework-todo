import Framework from "../Framework.js";
import {
  toggleTodo,
  startEdit,
  saveEdit,
  removeTodo,
} from "../actions/todoActions.js";
import { styles } from "../styles/todoItem.js";

class TodoItem extends Framework.Component {
  render() {
    const { todo = {}, index, store } = this.props;

    if (!todo) return null;

    return (
      <li style={styles.listItem}>
        <div style={styles.container}>
          {todo.editing ? (
            <input
              type="text"
              value={todo.text}
              onChange={(e) => store.dispatch(saveEdit(index, e.target.value))}
            />
          ) : (
            <span
              onClick={() => store.dispatch(toggleTodo(index))}
              style={{
                ...styles.todoText,
                textDecoration: todo.completed ? "line-through" : "none",
                opacity: todo.completed ? 0.7 : 1,
              }}
            >
              {todo.text}
            </span>
          )}
          <button
            onClick={() => store.dispatch(startEdit(index))}
            className="secondary outline"
            style={styles.button}
          >
            Edit
          </button>
          <button
            onClick={() => store.dispatch(removeTodo(index))}
            className="error outline"
            style={styles.deleteButton}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
