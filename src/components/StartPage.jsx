import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.svg'

function StartPage() {
  return (
    <div className='start-container'>
        <Link to="/set-timer">
            <motion.img
                src={logo} 
                alt='LOGO' 
                whileHover={{ scaleX: 1.2 }}
                transition={{ duration: 0.3 }}
            />
        </Link>
        <p>For all your timing needs</p>
    </div>
  )
}

export default StartPage
