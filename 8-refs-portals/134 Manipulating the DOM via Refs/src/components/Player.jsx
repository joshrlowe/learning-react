import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef("");
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);

    // Simple and effective use case for imperative DOM manipulation
    // Clears the input field after the name has been set
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input type="text" placeholder="Enter your name" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
