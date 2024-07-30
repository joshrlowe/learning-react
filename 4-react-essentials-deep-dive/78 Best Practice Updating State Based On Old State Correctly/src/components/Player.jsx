import { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing); // => schedules a state update to the opposite of the current state, argument is passed at runtime
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnContent = "Edit";

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    btnContent = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnContent}</button>
    </li>
  );
}

export default Player;
