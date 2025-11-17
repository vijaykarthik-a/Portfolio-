import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const name = "Vijay Karthik";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          Hi, I'm{' '}
          <span className="gradient-text">
            {name.split('').map((letter, index) => (
              <motion.span 
                key={index} 
                className="letter-hover" 
                style={{ '--letter-index': index }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.5 + index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -10,
                  color: "#ff0000",
                  transition: { duration: 0.2 }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Electronics & Communication Engineer
        </motion.p>
        <motion.p className="hero-description" variants={itemVariants}>
          I create beautiful, functional websites and applications that make a difference.
        </motion.p>
        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.button 
            onClick={() => scrollToSection('projects')} 
            className="btn btn-primary"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('contact')} 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
        <div className="quick-nav">
          <button onClick={() => scrollToSection('about')} className="nav-dot" title="About"></button>
          <button onClick={() => scrollToSection('projects')} className="nav-dot" title="Projects"></button>
          <button onClick={() => scrollToSection('skills')} className="nav-dot" title="Skills"></button>
          <button onClick={() => scrollToSection('contact')} className="nav-dot" title="Contact"></button>
        </div>
      </motion.div>
      <div className="hero-animation">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  );
}

export default Hero;
