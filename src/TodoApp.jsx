import Framework from "./Framework.js";
import TodoItem from "./components/TodoItem.js";

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
