import React from 'react';
import { motion } from 'framer-motion';
import minutesClock from '../assets/minutes.svg'; 

function AnalogPage({ secondsRemaining }) {
  return (
    <div className='clock-page'>
      
      <div className="clock-container">
        <img src={minutesClock} alt="Minutes" />
        
        <motion.div 
          className="hand minute-hand" 
          animate={{ rotate: 360 }} 
          transition={{ duration: secondsRemaining, repeat: Infinity }} 
        />
        {/* Den stora visaren kommer snurra ett helt varv varje gång, hastigheten är det "secondsremaning som avgör
        dvs är timern på 1minut jämfört med 10 minuter kommer den snurra 10 gånger snabbare, man får se det lite som en cirkulär progressbar
        Togglar man mellan vyerna så startar den alltid om på kl 12, av den enkla anledning att jag tycker det är snyggare och man får mer förståelse hur många
        procent som är kvar som jag nämnde ovanför." */}

        {/* Den lilla visaren snurrar ett helt varv, varje sekund, hela tiden. Den vet intes ens vad klockan är.
        Men det spelar ingen roll, för den fungerar bara som en visuell figur som berättar för oss när varje sekund har gått. */}
        /* 
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
