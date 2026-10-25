import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import sensiLogoPng from '../assets/logo.png'; 

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for menu
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/product' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          <Link to="/" onClick={closeMenu} className="group transition-all duration-300">
            <img 
              src={sensiLogoPng} 
              alt="SensiWeld Logo" 
              className={`${scrolled ? 'w-16 h-16' : 'w-24 h-24'} object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-2xl`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-teal ${
                  location.pathname === link.path ? 'text-teal' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary px-8 py-3 rounded-full font-bold text-dark shadow-xl shadow-teal/30 hover:shadow-teal/50 transition-all">
              Partner with Us
            </Link>
          </div>

          {/* Mobile Menu Trigger (Hamburger) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 glass rounded-lg z-50 relative"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                /* "X" Icon when open */
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                /* Hamburger Icon when closed */
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`text-2xl font-bold tracking-widest uppercase ${location.pathname === link.path ? 'text-teal' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className="btn-primary px-10 py-4 rounded-full font-bold text-dark text-lg"
          >
            Partner with Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;