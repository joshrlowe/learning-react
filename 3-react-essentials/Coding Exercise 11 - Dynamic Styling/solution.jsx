import React from "react";

// don't change the Component name "App"
export default function App() {
  let [toggle, setToggle] = React.useState(false);

  return (
    <div>
      <p className={toggle ? "active" : undefined}>Style me!</p>
      <button onClick={() => setToggle(!toggle)}>Toggle style</button>
    </div>
  );
}
