import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef("");
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  // This is no longer needed

  // const [submitted, setSubmitted] = useState(false);
  // function handleChange(event) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      {/* ?? is a nullish coalescing operator */}
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          type="text"
          placeholder="Enter your name"
          // onChange={handleChange}
          // value={enteredPlayerName}
          // Replace this ^ with the following:
          ref={playerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
