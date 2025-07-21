import React, { useState, useEffect } from 'react';

function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setDark(true);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <header className="apply-navbar apply-bg-primary sticky top-0 z-10">
      <div className="apply-wrapper">
        <div className="content flex items-center justify-between py-4">
          <a href="#hero" className="font-bold text-xl">Andromeda</a>
          <nav className="hidden md:flex space-x-4">
            <a href="#services" className="nav-link">What We Do</a>
            <a href="#portfolio" className="nav-link">Our Work</a>
            <a href="#team" className="nav-link">Our Team</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <button
            className="toggle-button ml-4"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle Dark Mode"
          >
            {dark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
