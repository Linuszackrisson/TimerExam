import React from 'react'
import { Routes, Route } from 'react-router-dom';
import StartPage from './components/startpage';
import SetTimer from './components/SetTimer';
import AnalogPage from './components/AnalogPage';
import End from './components/End'; 
import TimerPage from './components/TimerPage';
import TextPage from './components/TextPage';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/set-timer" element={<SetTimer />} />
        <Route path="/timerpage" element={<TimerPage />} />
        <Route path="/analog" element={<AnalogPage />} />
        <Route path="/textpage" element={<TextPage />} />
        <Route path="/end" element={<End />} />

      </Routes>
    </div>
  )
}

export default App
