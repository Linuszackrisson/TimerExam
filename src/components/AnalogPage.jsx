import React from 'react';
import { motion } from 'framer-motion';
import minutesClock from '../assets/minutes.svg'; 

function AnalogPage({ secondsRemaining }) {
  return (
    <div className='clock-page'>
      
      <div className="clock-container">
        <img src={minutesClock} alt="Minutes" />
        {/* Sekund- och minutvisare */}
        <motion.div 
          className="hand minute-hand" 
          animate={{ rotate: 360 }} 
          transition={{ duration: secondsRemaining, repeat: Infinity }} 
        />
        <motion.div 
          className="hand second-hand" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 1, repeat: Infinity }} 
        />
      </div>
    </div>
  );
}

export default AnalogPage;
