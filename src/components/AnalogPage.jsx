import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import minutesClock from '../assets/minutes.svg'; 

function AnalogPage() {
  const location = useLocation();
  const { minutes } = location.state || { minutes: 10 }; 

  return (
    <div className='clock-page'>
      <h1>Interval</h1>
      <div className="clock-container">
        <img src={minutesClock} alt="Minutes" />
        {/* Sekund- och minutvisare */}
        <motion.div 
          className="hand minute-hand" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 60 * minutes, repeat: Infinity }} 
        />
        <motion.div 
          className="hand second-hand" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 1, repeat: Infinity }} 
        />
      </div>
      <button>ABORT TIMER</button>
    </div>
  );
}

export default AnalogPage;
