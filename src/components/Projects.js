import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: 'IoT Home Automation',
      description: 'Smart home system with ESP32 and mobile control',
      fullDescription: 'An intelligent home automation system using ESP32 microcontroller with WiFi connectivity. Control lights, fans, and appliances remotely through a mobile app. Features include voice control integration, scheduling, energy monitoring, and real-time sensor data visualization.',
      tech: ['ESP32', 'Arduino', 'MQTT', 'React Native', 'Firebase'],
      features: ['Voice Control', 'Remote Access', 'Energy Monitoring', 'Automated Scheduling']
    },
    {
      title: 'Wireless Sensor Network',
      description: 'Multi-node environmental monitoring system',
      fullDescription: 'A distributed wireless sensor network for environmental monitoring using LoRa technology. Multiple sensor nodes collect temperature, humidity, and air quality data, transmitting to a central gateway. Real-time data visualization dashboard with alerts and historical data analysis.',
      tech: ['LoRa', 'Arduino', 'Python', 'Node.js', 'MongoDB'],
      features: ['Long-Range Communication', 'Low Power Design', 'Real-time Monitoring', 'Data Analytics']
    },
    {
      title: 'RFID Access Control',
      description: 'Smart security system with attendance tracking',
      fullDescription: 'An RFID-based access control and attendance management system. Features include contactless entry, real-time attendance logging, admin dashboard for user management, and automated reporting. Integrated with cloud database for remote monitoring and analytics.',
      tech: ['RFID', 'ESP8266', 'MySQL', 'PHP', 'Bootstrap'],
      features: ['Contactless Access', 'Attendance Tracking', 'Cloud Integration', 'Admin Dashboard']
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <div className="projects-wrapper">
          <div className="projects-grid" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="project-card"
                onClick={() => openProjectModal(project)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="project-card-inner">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="tech-stack">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <motion.span 
                        key={i} 
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div 
                    className="click-hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    Click to view details
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="project-nav">
            <button onClick={prevProject} className="project-nav-btn prev-btn">
              <span className="nav-icon">←</span>
              <span className="nav-text">Previous</span>
            </button>
            <div className="project-counter">
              {currentIndex + 1} / {projects.length}
            </div>
            <button onClick={nextProject} className="project-nav-btn next-btn">
              <span className="nav-text">Next</span>
              <span className="nav-icon">→</span>
            </button>
          </div>
          <div className="project-indicators">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`project-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay" 
            onClick={closeProjectModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="project-modal" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.5, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <motion.button 
                className="modal-close" 
                onClick={closeProjectModal}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
              <motion.h2 
                className="modal-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {selectedProject.title}
              </motion.h2>
              <motion.p 
                className="modal-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {selectedProject.fullDescription}
              </motion.p>
              
              <motion.div 
                className="modal-section"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3>Technologies Used</h3>
                <div className="modal-tech-stack">
                  {selectedProject.tech.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="modal-tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="modal-section"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3>Key Features</h3>
                <ul className="modal-features">
                  {selectedProject.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
