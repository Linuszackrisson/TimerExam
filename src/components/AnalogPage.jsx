import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Lägg till useNavigate
import { motion } from 'framer-motion';
import minutesClock from '../assets/minutes.svg'; 

function AnalogPage() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const { minutes } = location.state || { minutes: 10 }; 
  const totalSeconds = minutes * 60; 
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds); // Hantera sekunder kvar

  useEffect(() => {
    if (secondsRemaining > 0) {
      const timerId = setInterval(() => {
        setSecondsRemaining(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timerId); 
    } else {
      navigate('/end'); 
    }
  }, [secondsRemaining, navigate]);

  return (
    <div className='clock-page'>
      <h1>Interval</h1>
      <div className="clock-container">
        <img src={minutesClock} alt="Minutes" />
        {/* Sekund- och minutvisare */}
        <motion.div 
          className="hand minute-hand" 
          animate={{ rotate: 360 }} 
          transition={{ duration: totalSeconds, repeat: Infinity }} // Roterar en gång per minut
        />
        <motion.div 
          className="hand second-hand" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 1, repeat: Infinity }} 
        />
      </div>
      <button onClick={() => navigate('/set-timer')}>ABORT TIMER</button>
    </div>
  );
}

export default AnalogPage;
