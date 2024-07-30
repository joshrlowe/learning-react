import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex, activePlayerSymbol) {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      newGameBoard[rowIndex][colIndex] =
        newGameBoard[rowIndex][colIndex] === null
          ? activePlayerSymbol
          : newGameBoard[rowIndex][colIndex];
      return newGameBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() =>
                    handleSelectSquare(rowIndex, colIndex, activePlayerSymbol)
                  }
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
