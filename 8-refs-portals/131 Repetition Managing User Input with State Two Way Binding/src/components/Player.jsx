import { useState } from "react";

export default function Player() {
  // State to store the player name
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  // State to store if the form is submitted
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    // Reset the submitted state
    setSubmitted(false);

    // Update the entered player name
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    // Set the form as submitted
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input
          type="text"
          placeholder="Enter your name"
          // Update the entered player name
          onChange={handleChange}
          // Set the entered player name
          value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
