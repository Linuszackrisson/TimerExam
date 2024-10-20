import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ändrad till useNavigate
import alarmIcon from '../assets/alarmicon.svg'; // Importera SVG-filen

function End() {
  const navigate = useNavigate(); // Skapa en instans av useNavigate

  const handleButtonClick = () => {
    navigate('/set-timer'); // Navigera till TimerPage med useNavigate
  };

  return (
    <div className="end-page">
      <div className="end-mid">
      <img src={alarmIcon} alt="Alarm Icon" className="alarm-icon" /> {/* Visa SVG-ikonen */}
      </div>
      <h1 className='times-up'>Times up!</h1>
      
      <button className='newtime-button' onClick={handleButtonClick}>SET NEW TIMER</button> {/* Ändrad onClick-funktion */}

    </div>
  );
}

export default End;
