import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import alarmIcon from '../assets/alarmicon.svg'; 
import { motion } from 'framer-motion'; 

function End() {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/set-timer'); 
  };

  return (
    <div className="end-page">
      <div className="end-mid">
      <motion.img 
        src={alarmIcon} 
        alt="Alarm Icon" 
        className="alarm-icon" 
        animate={{ rotate: [0, 10, -10, 0] }} 
        transition={{ duration: 0.5, repeat: Infinity }} 
      /> 
      </div>
      <h1 className='times-up'>Times up!</h1>

      <button className='newtime-button' onClick={handleButtonClick}>SET NEW TIMER</button> 

    </div>
  );
}

export default End;
