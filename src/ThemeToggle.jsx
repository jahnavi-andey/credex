import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // On mount, check if dark mode preference is saved in localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDark(savedMode === 'true');
    }
  }, []);

  // Apply the dark mode class to the body and save preference in localStorage
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDark]);

  return (
    <button
      className="button"
      onClick={() => setIsDark(!isDark)}
      style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
