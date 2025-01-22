import Framework from "../Framework.js";
import { addTodo } from "../actions/todoActions.js";
import { styles } from "../styles/todoInput.js";

class TodoInput extends Framework.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const text = this.state.inputValue.trim();

    if (text) {
      this.props.store.dispatch(addTodo(text));
      this.setState({ inputValue: "" });
    }
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.footer}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="What needs to be done?"
          style={styles.input}
        />
        <button type="submit" className="primary" style={styles.button}>
          Add Todo
        </button>
      </form>
    );
  }
}

export default TodoInput;
