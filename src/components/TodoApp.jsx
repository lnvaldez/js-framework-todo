import Framework from "../Framework.js";
import TodoItem from "./TodoItem.js";
import TodoInput from "./TodoInput.js";
import { styles } from "../styles/todoApp.js";

class TodoApp extends Framework.Component {
  render() {
    const state = this.props.store.getState();

    return (
      <main className="container" style={styles.container}>
        <article style={styles.article}>
          <h1>Todo List</h1>
          <ul style={styles.list}>
            {state.todos.map((todo, index) => (
              <TodoItem
                todo={todo}
                index={index}
                key={index}
                store={this.props.store}
              />
            ))}
          </ul>
          <TodoInput store={this.props.store} />
        </article>
      </main>
    );
  }
}

export default TodoApp;
