import React, { useState } from 'react';
import incrementIcon from '../assets/increment.svg';
import decrementIcon from '../assets/decrement.svg';
import { useNavigate } from 'react-router-dom';

function SetTimer() {
  const [minutes, setMinutes] = useState(10);
  const [isInterval, setIsInterval] = useState(false);
  const [hasBreak, setHasBreak] = useState(false);
  const navigate = useNavigate();

  const handleStartTimer = () => {
    navigate('/timerpage', { state: { minutes, isInterval, hasBreak } });
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
          <input type="checkbox" checked={isInterval} onChange={() => setIsInterval(!isInterval)} className="custom-checkbox" />
          Intervals
        </label>
        <label>
          <input type="checkbox" checked={hasBreak} onChange={() => setHasBreak(!hasBreak)} className="custom-checkbox" />
          5 min break/interval
        </label>
      </div>
      <button className='start-timer' onClick={handleStartTimer}>START TIMER</button>
    </div>
  );
}

export default SetTimer;