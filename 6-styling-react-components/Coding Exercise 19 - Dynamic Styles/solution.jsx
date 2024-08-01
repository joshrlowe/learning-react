import React from "react";

// don't change the Component name "App"
export default function App() {
  const [toggled, setToggled] = React.useState(false);

  return (
    <div>
      <p
        style={{
          color: toggled ? "red" : "white",
        }}
      >
        Style me!
      </p>
      <button onClick={() => setToggled((t) => !t)}>Toggle style</button>
    </div>
  );
}
