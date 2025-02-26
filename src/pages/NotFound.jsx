import React from 'react'
import { motion } from 'framer-motion'
import AnimatedBackground from '../components/AnimatedBackground'
import '../index.css'

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      <AnimatedBackground />
      <motion.div 
        className="z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-9xl font-bold"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          404
        </motion.h1>
        <motion.p 
          className="text-2xl mt-4"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.a 
          href="/"
          className="mt-8 text-lg"
          style={{ color: 'var(--link-color)' }}
          whileHover={{ scale: 1.1, color: 'var(--link-hover-color)' }}
          whileTap={{ scale: 0.9 }}
        >
          Go back to Home
        </motion.a>
      </motion.div>
    </div>
  )
}

export default NotFound