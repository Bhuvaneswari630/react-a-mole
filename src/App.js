import { useState } from 'react';
import './App.css';
import MoleContainer from './Components/MoleContainer';

function App() {
  let [score, setScore] = useState(0)
  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
          key={i}
          score={score}
          setScore={setScore}
        />
      )
    }
    return (
      <div className='moleContainer'>
        {hills}
      </div>
    )
  }

  const resetGame = () => {
    setScore(0)
  }

  return (
    <div className="App">
      <h1>React-a-mole Game!</h1>
      <button onClick={resetGame} >Reset</button>
      <h3>{score}</h3>
      {createMoleHill()}
    </div>
  );
}

export default App;
