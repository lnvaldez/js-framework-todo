/** @jsx createElement */
import { createElement, render, useState } from "./Framework";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          console.log("Current count:", count);
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

render(<Counter />, document.getElementById("root"));
