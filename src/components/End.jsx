import React from 'react';
import alarmIcon from '../assets/alarmicon.svg'; // Importera SVG-filen
import cancelTimer from '../components/TimerPage.jsx';

function End() {
  return (
    <div className="end-page">
      <img src={alarmIcon} alt="Alarm Icon" className="alarm-icon" /> {/* Visa SVG-ikonen */}
      <h1 className='times-up'>Times up!</h1>
      <button className='newtime-button' onClick={cancelTimer}>SET NEW TIMER</button>

    </div>
  );
}

export default End;
