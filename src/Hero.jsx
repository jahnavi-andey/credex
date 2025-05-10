import React from 'react';
import './main.css';
import heroImg from './hero-image.png';
import { motion } from 'framer-motion';

const Header = () => (
  <section className="hero-header">
    <div className="hero-text">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Unlock Value from Your Unused Software Licenses
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        SoftSell helps you turn idle software into real revenue—fast, secure, and hassle-free.
      </motion.p>
      <motion.button
        className="button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Sell My Licenses
      </motion.button>
    </div>
    <div className="hero-image">
      <motion.img
        src={heroImg}
        alt="Software resale illustration"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  </section>
);

export default Header;
