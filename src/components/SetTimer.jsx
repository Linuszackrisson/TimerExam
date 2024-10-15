import React, { useState } from 'react';
import incrementIcon from '../assets/increment.svg'; // Justera sökvägen till din bild
import decrementIcon from '../assets/decrement.svg'; // Justera sökvägen till din bild

function SetTimer() {
  const [minutes, setMinutes] = useState(10);
  const [intervals, setIntervals] = useState(false);
  const [breakTime, setBreakTime] = useState(false);

  return (
    <div className='timerpage-container'>
      <div>
        <button onClick={() => setMinutes(minutes > 0 ? minutes - 1 : 0)}>
          <img src={decrementIcon} alt="Decrease" />
        </button>
        <span className='minutes'>{minutes}</span>
        <button onClick={() => setMinutes(minutes < 60 ? minutes + 1 : 60)}>
          <img src={incrementIcon} alt="Increase" />
        </button>
      </div>
      <div className='checkbox-container'>
        <label>
          <input type="checkbox" checked={intervals} onChange={() => setIntervals(!intervals)} className="custom-checkbox" />
          Intervals
        </label>
        <label>
          <input type="checkbox" checked={breakTime} onChange={() => setBreakTime(!breakTime)} className="custom-checkbox" />
          5 min break/interval
        </label>
      </div>
      <button onClick={() => alert('Timer started!')}>START TIMER</button>
    </div>
  );
}

export default SetTimer;
