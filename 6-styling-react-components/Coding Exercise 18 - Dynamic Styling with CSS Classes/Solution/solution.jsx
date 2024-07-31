import React from "react";

function App() {
  const [color, setColor] = React.useState(null);

  return (
    <div id="app">
      <h1 className={color ? `highlight-${color}` : undefined}>
        CSS is great!
      </h1>
      <menu>
        <li>
          <button onClick={() => setColor("green")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setColor("red")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
