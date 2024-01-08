import Board from "./components/Board";
import "./App.css";
// import { useState } from 'react';

function App() {
  // const [board, setBoard] = useState(Array(9).fill(null));
  const board = Array(9).fill(null);

  return (
    <div className="App">
      <Board board={board} />
    </div>
  );
}

export default App;
