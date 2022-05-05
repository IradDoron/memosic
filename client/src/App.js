import { useEffect, useState } from 'react';
import './App.css';
import GameSetup from './components/GameSetup';

function App() {
  const [notesAmount, setNotesAmount] = useState(0);

  useEffect(() => {
    console.log(notesAmount);
  }, [notesAmount]);

  return (
    <>
      <h1>Memosic</h1>
      <GameSetup setNotesAmount={setNotesAmount} />
    </>
  );
}

export default App;
