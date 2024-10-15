import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

function StartPage() {
  return (
    <div className='start-container'>
        <Link to="/set-timer">
            <img src={logo} alt='LOGO' />
        </Link>
        <p>For all your timing needs</p>
    </div>
  )
}

export default StartPage

