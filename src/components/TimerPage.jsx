import React, { useState, useEffect } from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom';
import AnalogPage from './AnalogPage';
import DigitalPage from './DigitalPage';
import TextPage from './TextPage'; 

function TimerPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { minutes } = location.state || {}; 
  const totalSeconds = minutes * 60; 

  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds); 
  const [view, setView] = useState('analog'); 

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

  const toggleView = () => {
    if (view === 'analog') {
      setView('digital');
    } else if (view === 'digital') {
      setView('text');
    } else {
      setView('analog');
    }
  };

  const abortTimer = () => navigate('/set-timer'); 

  return (
    <div className='timerpage'>
      <h1 className='LOGO'>Interval</h1>
      
      {view === 'analog' && <AnalogPage secondsRemaining={secondsRemaining} />} 
      {view === 'digital' && <DigitalPage secondsRemaining={secondsRemaining} />} 
      {view === 'text' && <TextPage secondsRemaining={secondsRemaining} />} 
      
      <button onClick={toggleView}>
        {view === 'analog' ? 'Switch to Digital' : view === 'digital' ? 'Switch to Text' : 'Switch to Analog'}
      </button>
      <button onClick={abortTimer}>ABORT TIMER</button> 
    </div>
  );
}

export default TimerPage;
