import React from 'react';
import { motion } from 'framer-motion';

function DigitalPage({ secondsRemaining }) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div className='digital-page'>
      <motion.h2 
        className='digital-clock' 
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }} 
      > {`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
      </motion.h2>
    </div>
  );
}

export default DigitalPage;
