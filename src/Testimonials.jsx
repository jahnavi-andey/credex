import React from 'react';
import './main.css';
import { motion } from 'framer-motion';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="stars">
      {[...Array(totalStars)].map((_, i) => (
        <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>★</span>
      ))}
    </div>
  );
};

const Testimonials = () => (
  <section id="testimonials">
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Customer Testimonials
    </motion.h2>
    
    <motion.div
      className="testimonial"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p>"SoftSell helped us recover value from old licenses effortlessly!"</p>
      <p>- Jane Doe, IT Manager, TechCorp</p>
      <StarRating rating={5} />
    </motion.div>

    <motion.div
      className="testimonial"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <p>"Highly recommend for anyone looking to monetize unused software."</p>
      <p>- John Smith, CFO, InnovateX</p>
      <StarRating rating={4} />
    </motion.div>
  </section>
);

export default Testimonials;
