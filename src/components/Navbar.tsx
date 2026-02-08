import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import sensiLogoPng from '../assets/logo.png'; 

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/product' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link to="/" className="group transition-all duration-300">
          <img 
            src={sensiLogoPng} 
            alt="SensiWeld Logo" 
            className={`${scrolled ? 'w-20 h-20' : 'w-32 h-32'} object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-2xl`} 
          />
        </Link>

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

        {/* Mobile Menu Trigger */}
        <button className="md:hidden text-white p-2 glass rounded-lg">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;