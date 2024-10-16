import React from 'react'
import { Routes, Route } from 'react-router-dom';
import StartPage from './components/startpage';
import SetTimer from './components/SetTimer';
import AnalogPage from './components/AnalogPage';
import End from './components/End'; 

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/set-timer" element={<SetTimer />} />
        <Route path="/analog" element={<AnalogPage />} />
        <Route path="/end" element={<End />} />

      </Routes>
    </div>
  )
}

export default App
