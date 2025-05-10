import React from 'react';
import './main.css';
import { motion } from 'framer-motion';

const HowItWorks = () => (
  <section>
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      How It Works
    </motion.h2>
    <div className="how-it-works-flow">
      <motion.div
        className="step"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>1. Upload License</h3>
        <p>Send us your unused software license details.</p>
      </motion.div>
      <motion.div
        className="arrow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        ➜
      </motion.div>
      <motion.div
        className="step"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h3>2. Get Valuation</h3>
        <p>We’ll provide a fair market value estimate.</p>
      </motion.div>
      <motion.div
        className="arrow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        ➜
      </motion.div>
      <motion.div
        className="step"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2.4 }}
      >
        <h3>3. Get Paid</h3>
        <p>Receive payment directly to your account.</p>
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
