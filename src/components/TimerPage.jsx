import React, { useState, useEffect } from 'react'; // Importera useState och useEffect
import { useLocation, useNavigate } from 'react-router-dom';
import AnalogPage from './AnalogPage';
import DigitalPage from './DigitalPage';
import TextPage from './TextPage'; // Importera TextPage

function TimerPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { minutes } = location.state || {}; 
  const totalSeconds = minutes * 60; // Beräkna totala sekunder

  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds); // Hantera sekunder kvar
  const [view, setView] = useState('analog'); // Standard är analog

  useEffect(() => {
    if (secondsRemaining > 0) {
      const timerId = setInterval(() => {
        setSecondsRemaining(prev => prev - 1); // Minska sekunder kvar
      }, 1000);

      return () => clearInterval(timerId); // Rensa intervall när komponenten unmountas
    } else {
      navigate('/end'); // Navigera till 'end' när tiden är slut
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

  const abortTimer = () => navigate('/set-timer'); // Navigera tillbaka till timerinställning

  return (
    <div className='timerpage'>
      <h1 className='LOGO'>Interval</h1>
      
      {view === 'analog' && <AnalogPage secondsRemaining={secondsRemaining} />} {/* Rendera AnalogPage */}
      {view === 'digital' && <DigitalPage totalSeconds={secondsRemaining} />} {/* Rendera DigitalPage */}
      {view === 'text' && <TextPage totalSeconds={secondsRemaining} />} {/* Rendera TextPage */}
      
      <button onClick={toggleView}>
        {view === 'analog' ? 'Switch to Digital' : view === 'digital' ? 'Switch to Text' : 'Switch to Analog'}
      </button>
      <button onClick={abortTimer}>ABORT TIMER</button> {/* Abortknapp */}
    </div>
  );
}

export default TimerPage;
