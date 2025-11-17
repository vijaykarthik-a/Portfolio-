import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'IoT Systems', level: 90, icon: '🌐' },
    { name: 'ESP32/Arduino', level: 85, icon: '🔌' },
    { name: 'Embedded C', level: 85, icon: '⚙️' },
    { name: 'Circuit Design', level: 80, icon: '⚡' },
    { name: 'Wireless Tech', level: 85, icon: '📡' },
    { name: 'Python', level: 80, icon: '🐍' },
    { name: 'React/Node.js', level: 75, icon: '⚛️' },
    { name: 'PCB Design', level: 70, icon: '🔧' },
    { name: 'Sensors', level: 85, icon: '📊' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="skill-icon"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <span className="skill-name">{skill.name}</span>
              <motion.span 
                className="skill-percentage"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {skill.level}%
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
