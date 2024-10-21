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
      > {/* Målet här var att försöka få en svävande effekt så vi animerar y-axel och det tar två sekunder att nå målet o tillbaks,
      även denna loopar.*/}
        {`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
      </motion.h2>
    </div>
  );
}

export default DigitalPage;
