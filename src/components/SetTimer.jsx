import React, { useState } from 'react';
import incrementIcon from '../assets/increment.svg';
import decrementIcon from '../assets/decrement.svg';
import { useNavigate } from 'react-router-dom';

function SetTimer() {
  const [minutes, setMinutes] = useState(10);
  const [intervals, setIntervals] = useState(false);
  const [breakTime, setBreakTime] = useState(false);
  const navigate = useNavigate();

  const handleStartTimer = () => {
    // Navigera till '/analog' och skicka med minutvärdet som state
    navigate('/analog', { state: { minutes } });
  };

  return (
    <div className='timerpage-container'>
      <div>
        <button className='arrow' onClick={() => setMinutes(minutes > 0 ? minutes - 1 : 0)}>
          <img src={decrementIcon} alt="Decrease" />
        </button>
        <span className='minutes'>{minutes}</span>
        <button className='arrow' onClick={() => setMinutes(minutes < 60 ? minutes + 1 : 60)}>
          <img src={incrementIcon} alt="Increase" />
        </button>
        <p className='minutes-text'>minutes</p>
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
      <button className='start-timer' onClick={handleStartTimer}>START TIMER</button>
    </div>
  );
}

export default SetTimer;
