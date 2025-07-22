/*In the prev stage we created a page which will display when user clicks on it but for the game to perform and declare the winner . 
 We need to store the values typed by the user to declare a  winner . */
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

/* In th orevious thing we have written the useState hook inside the sqaure function . But now we wouldnt do that as we need to store the answer.
so instead we define it in the Board function . 
Now the Question would be how will the Square function access this Hook . 
So we pass the Name of hook function to the square as an function instead of sending it in the vlaue format .*/


export default function Board() {
/* Here we define the const along with the useStateHook . we take an array with a length of  9 and null values in them. */
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
