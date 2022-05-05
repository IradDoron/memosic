import React from 'react';
import styled from 'styled-components';

function GameSetup({ setNotesAmount }) {
  function handleSubmit(e) {
    e.preventDefault();
    setNotesAmount(e.target.notes_number.value);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        <input type="number" name="notes_number" />
      </label>
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default GameSetup;
