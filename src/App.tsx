

import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import BlogPage from './pages/BlogPage';
import './App.css';


const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [route, setRoute] = useState(window.location.hash.replace('#', '') || 'home');
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    const onHashChange = () => setRoute(window.location.hash.replace('#', '') || 'home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [darkMode]);

  return (
    <div className="portfolio-root">
      <nav className="navbar">
        <div className="nav-logo">TPM Portfolio</div>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#blogpage">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="theme-toggle" onClick={() => setDarkMode((d) => !d)} aria-label="Toggle dark mode">
          {darkMode ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
          )}
        </button>
      </nav>
      <main>
        {route === 'about' && <><Hero /><About /><Experience /><Projects /><Skills /><Achievements /><Contact /></>}
        {route === 'experience' && <><Hero /><About /><Experience /><Projects /><Skills /><Achievements /><Contact /></>}
        {route === 'projects' && <><Hero /><About /><Experience /><Projects /><Skills /><Achievements /><Contact /></>}
        {route === 'skills' && <><Hero /><About /><Experience /><Projects /><Skills /><Achievements /><Contact /></>}
        {route === 'achievements' && <><Hero /><About /><Experience /><Projects /><Skills /><Achievements /><Contact /></>}
        {route === 'contact' && <><Hero /><About /><Experience /><Projects /><Skills /><Achievements /><Contact /></>}
        {route === 'blogpage' && <BlogPage />}
        {route === 'home' && <><Hero /><About /><Experience /><Projects /><Skills /><Achievements /><Contact /></>}
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Miguel Moroyoqui · Technical Program Manager
      </footer>
    </div>
  );
};

export default App;
