import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import SecretPage from './SecretPage';

function About() {
  const [showSecret, setShowSecret] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleNameClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount >= 5) {
      setShowSecret(true);
      setClickCount(0); // Reset counter
    }
  };

  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="about-text">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Hello and welcome! I'm <span className="clickable-name" onClick={handleNameClick}>Vijay Karthik</span>, an Electronics and Communication Engineering student with a passion for IoT, embedded systems, and wireless technologies. With an 8.4 CGPA, I combine strong academic foundation with hands-on experience in building innovative solutions that bridge the physical and digital worlds.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                My expertise spans across microcontroller programming (ESP32, Arduino), wireless communication protocols (LoRa, MQTT, WiFi), sensor integration, and full-stack web development. I specialize in creating IoT solutions that solve real-world problems, from smart home automation to industrial monitoring systems. I'm particularly interested in low-power design, edge computing, and the convergence of AI with embedded systems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                When I'm not building circuits or coding, you'll find me exploring emerging technologies like 5G, exploring robotics projects, or contributing to open-source hardware communities. I believe in continuous learning and sharing knowledge to push the boundaries of what's possible in electronics and communication engineering.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
      {showSecret && <SecretPage onClose={() => setShowSecret(false)} />}
    </>
  );
}

export default About;
