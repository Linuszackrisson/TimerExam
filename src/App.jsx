import React from 'react'
import { Routes, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import SetTimer from './components/SetTimer';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/set-timer" element={<SetTimer />} />
      </Routes>
    </div>
  )
}

export default App
