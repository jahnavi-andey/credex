import React from 'react';
import './main.css';
import { motion } from 'framer-motion';

const WhyChooseUs = () => (
  <section>
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Why Choose Us
    </motion.h2>
    <div className="why-choose-grid">
      <motion.div
        className="tile"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3>Fast Process</h3>
        <p>We ensure a quick turnaround from submission to payment.</p>
      </motion.div>
      <motion.div
        className="tile"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3>Trusted by Clients</h3>
        <p>We have worked with companies across industries.</p>
      </motion.div>
      <motion.div
        className="tile"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3>Secure Transactions</h3>
        <p>Your data is handled with the highest security standards.</p>
      </motion.div>
      <motion.div
        className="tile"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3>Expert Valuation</h3>
        <p>Our team ensures you get a fair deal.</p>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;
