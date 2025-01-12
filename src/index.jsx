/** @jsx createElement */
import { render, createElement } from "./Framework.js";
import TodoApp from "./app.jsx";

const root = document.getElementById("root");
render(<TodoApp />, {}, root);
