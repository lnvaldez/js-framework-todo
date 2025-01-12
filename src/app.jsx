/** @jsx createElement */
import { createElement, render } from "./Framework";

const element = (
  <div>
    <h1>Hello JS</h1>
    <p>First test</p>
  </div>
);

render(element, document.getElementById("root"));
