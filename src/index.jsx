import Framework from "./Framework.js";
import TodoApp from "./TodoApp.js";
import store from "./store.js";

function renderApp() {
  const root = document.getElementById("root");
  Framework.render(<TodoApp store={store} />, root);
}

store.subscribe(renderApp);

renderApp();
