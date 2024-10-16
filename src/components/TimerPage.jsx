import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AnalogPage from './AnalogPage';
import DigitalPage from './DigitalPage';
import TextPage from './TextPage';

function TimerPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { minutes, isInterval, hasBreak } = location.state || {};
  const workSeconds = minutes * 60;
  const breakSeconds = 5; // 5 minuters break

  const [secondsRemaining, setSecondsRemaining] = useState(workSeconds);
  const [view, setView] = useState('analog');
  const [isBreak, setIsBreak] = useState(false);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev === 0) {
          if (isBreak) {
            setIsBreak(false); 
            setCycles(c => c + 1); 
            return workSeconds; 
          } else {
           
            if (isInterval || hasBreak) {
              if (hasBreak) {
                setIsBreak(true); 
                return breakSeconds;
              } else {
                setCycles(c => c + 1); 
                return workSeconds; 
              }
            } else {
              clearInterval(timerId);
              navigate('/end');
              return 0;
            }
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isInterval, isBreak, hasBreak, workSeconds, breakSeconds, navigate]);

  const toggleView = () => {
    setView(current => {
      if (current === 'analog') return 'digital';
      if (current === 'digital') return 'text';
      return 'analog';
    });
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
