import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  const contactLinks = [
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/vijaykarthik-a/',
      description: 'Check out my code'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:a.vijaykarthik@gmail.com',
      description: 'Get Connected'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/vijaykarthik',
      description: 'Connect with me'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <div className="contact-grid">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="contact-icon"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
              >
                {link.icon}
              </motion.div>
              <h3 className="contact-name">{link.name}</h3>
              <p className="contact-description">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
