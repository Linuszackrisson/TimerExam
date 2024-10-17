import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AnalogPage from './AnalogPage';
import DigitalPage from './DigitalPage';
import TextPage from './TextPage';
import navIcon from '../assets/navicon.svg'; // Importera SVG-filen

function TimerPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { minutes = 25, isInterval = false, hasBreak = false } = location.state || {};

  const workSeconds = minutes * 60;
  const breakSeconds = 5; 

  const [secondsRemaining, setSecondsRemaining] = useState(workSeconds);
  const [view, setView] = useState('digital');
  const [isBreak, setIsBreak] = useState(false);
  const [cycles, setCycles] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hantera hamburgermeny

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecondsRemaining((prevSecondsRemaining) => {
        if (prevSecondsRemaining === 0) {
          if (isBreak) {
            setIsBreak(false);
            setCycles(cycles + 1);  
            return workSeconds; 
          } else {
            if (isInterval || hasBreak) {
              if (hasBreak) {
                setIsBreak(true);
                return breakSeconds; 
              } else {
                setCycles(cycles + 1);
                return workSeconds; 
              }
            } else {
              clearInterval(timerId);
              navigate('/end'); 
              return 0;
            }
          }
        }
        return prevSecondsRemaining - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [workSeconds, breakSeconds, isInterval, hasBreak, isBreak, cycles, navigate]);

  // Funktion för att byta vy och stänga menyn
  const changeView = (newView) => {
    setView(newView);
    setIsMenuOpen(false); // Stänger menyn efter ett val
  };

  // Funktion för att toggla hamburgermenyn
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cancelTimer = () => {
    navigate('/set-timer'); 
  };

  return (
    <div className='timerpage'>
      <h1 className='LOGO'>interval</h1>

      {/* Rendera rätt vy beroende på vilken som är vald */}
      {view === 'analog' && <AnalogPage secondsRemaining={secondsRemaining} />}
      {view === 'digital' && <DigitalPage secondsRemaining={secondsRemaining} />}
      {view === 'text' && <TextPage secondsRemaining={secondsRemaining} />}

      {/* Hamburgermeny-knapp med SVG-ikon */}
      <button onClick={toggleMenu} className="hamburger-menu">
        <img src={navIcon} alt="Menu Icon" /> {/* Använd SVG som bild */}
      </button>

      {/* Menyalternativ, visas endast när menyn är öppen */}
      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li onClick={() => changeView('analog')}>Analog View</li>
            <li onClick={() => changeView('digital')}>Digital View</li>
            <li onClick={() => changeView('text')}>Text View</li>
          </ul>
        </div>
      )}

      <button className='abort-button' onClick={cancelTimer}>ABORT TIMER</button>
    </div>
  );
}

export default TimerPage;
