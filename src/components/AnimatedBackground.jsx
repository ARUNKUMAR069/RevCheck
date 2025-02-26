import React from 'react'
import { motion } from 'framer-motion'
import './AnimatedBackground.css'
const shapes = ['circle', 'square', 'triangle']

const generateRandomPosition = () => ({
  top: `${Math.random() * 100}vh`,
  left: `${Math.random() * 100}vw`
})

const generateRandomShape = () => shapes[Math.floor(Math.random() * shapes.length)]

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, index) => {
        const shape = generateRandomShape()
        return (
          <motion.div
            key={index}
            className={`absolute ${shape}`}
            style={{
              ...generateRandomPosition(),
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: Math.random() * 2
            }}
          />
        )
      })}
    </div>
  )
}

export default AnimatedBackground