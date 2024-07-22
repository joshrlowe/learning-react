import React from "react";

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
  const [proceedState, setProceedState] = React.useState(false);

  function handleDelete(value) {
    setProceedState(value);
  }

  let proceedContent = "";
  if (proceedState) {
    proceedContent = (
      <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={() => handleDelete(false)}>Proceed</button>
      </div>
    );
  }

  return (
    <div>
      {proceedContent}
      <button onClick={() => handleDelete(true)}>Delete</button>
    </div>
  );
}
