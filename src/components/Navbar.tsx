import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import sensiLogoPng from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/product' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-2' : 'bg-transparent py-4'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          <Link to="/" onClick={closeMenu} className="group transition-all duration-300" aria-label="SensiWeld home">
            <img
              src={sensiLogoPng}
              alt="SensiWeld"
              className={`${scrolled ? 'w-14 h-14' : 'w-20 h-20'} object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-sm`}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-teal focus:outline-none focus:underline ${
                  location.pathname === link.path ? 'text-teal' : 'text-navy/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary px-6 py-2.5 rounded-full font-bold text-white shadow-md shadow-teal/20 hover:shadow-teal/40 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
            >
              Get in Touch
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-navy p-2 glass rounded-lg z-50 relative focus:outline-none focus:ring-2 focus:ring-teal"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {isMobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-cream/97 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`text-2xl font-bold tracking-wide ${location.pathname === link.path ? 'text-teal' : 'text-navy'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="btn-primary px-10 py-4 rounded-full font-bold text-white text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
