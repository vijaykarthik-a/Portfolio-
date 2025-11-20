import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CrackableEgg.css';

function CrackableEgg({ onEggCracked }) {
  const [cracks, setCracks] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleEggClick = () => {
    const newCracks = cracks + 1;
    setCracks(newCracks);
    
    if (newCracks >= 5) {
      setTimeout(() => {
        setIsVisible(false);
        onEggCracked();
      }, 500);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      className="egg-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
    >
      <div className="egg-wrapper">
        <div className="egg-shadow"></div>
        <motion.div 
          className="egg"
          onClick={handleEggClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            rotate: cracks > 0 ? [0, -2, 2, -1, 1, 0] : 0,
            scale: cracks > 0 ? [1, 1.05, 1] : 1
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Shine effects */}
          <div className="shine-1"></div>
          <div className="shine-2"></div>
          <div className="shine-3"></div>
          
          {/* Texture speckles */}
          <div className="speckle" style={{ left: '25%', top: '30%' }}></div>
          <div className="speckle" style={{ left: '65%', top: '25%' }}></div>
          <div className="speckle" style={{ left: '45%', top: '40%' }}></div>
          <div className="speckle" style={{ left: '70%', top: '50%' }}></div>
          <div className="speckle" style={{ left: '30%', top: '55%' }}></div>
          <div className="speckle" style={{ left: '55%', top: '65%' }}></div>
          <div className="speckle" style={{ left: '40%', top: '70%' }}></div>
          <div className="speckle" style={{ left: '75%', top: '45%' }}></div>
          <div className="speckle" style={{ left: '35%', top: '45%' }}></div>
          <div className="speckle" style={{ left: '60%', top: '75%' }}></div>
          
          {/* Crack lines */}
          <AnimatePresence>
            {cracks >= 1 && (
              <motion.svg 
                className="crack-svg crack-1" 
                viewBox="0 0 200 280"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              >
                <path className="crack-path" d="M 100 60 Q 105 100 100 140" />
              </motion.svg>
            )}
            
            {cracks >= 2 && (
              <motion.svg 
                className="crack-svg crack-2" 
                viewBox="0 0 200 280"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              >
                <path className="crack-path" d="M 100 140 L 80 180 M 100 140 L 120 180" />
              </motion.svg>
            )}
            
            {cracks >= 3 && (
              <motion.svg 
                className="crack-svg crack-3" 
                viewBox="0 0 200 280"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              >
                <path className="crack-path" d="M 70 120 L 100 140 L 130 120" />
              </motion.svg>
            )}
            
            {cracks >= 4 && (
              <motion.svg 
                className="crack-svg crack-4" 
                viewBox="0 0 200 280"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              >
                <path className="crack-path" d="M 50 100 Q 70 120 50 160 M 150 100 Q 130 120 150 160" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <motion.p 
        className="egg-message"
        animate={{ 
          opacity: [1, 0.7, 1],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🥚 Crack the egg to unlock secret ({cracks}/5)
      </motion.p>
    </motion.div>
  );
}

export default CrackableEgg;