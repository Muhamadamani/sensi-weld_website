import React from 'react';
import { Link } from 'react-router-dom';
import sensiLogoPng from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy border-t border-navy/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand col */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="inline-block mb-6 group">
            <img
              src={sensiLogoPng}
              alt="SensiWeld Logo"
              className="w-20 h-20 group-hover:scale-105 transition-transform object-contain"
            />
          </Link>
          <p className="text-mint/70 text-sm max-w-sm leading-relaxed mb-4">
            Bio-based adhesives and ultrasonic welding for natural-fibre composites. Born at TU Delft.
          </p>
          <a
            href="https://www.linkedin.com/company/sensiweld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-mint/60 hover:text-mint transition-colors group"
            aria-label="SensiWeld on LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.046c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.37 4.267 5.455v6.283zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-sm font-medium">Follow us on LinkedIn</span>
          </a>
        </div>

        {/* Explore links */}
        <div>
          <h4 className="text-xs font-bold text-teal mb-6 uppercase tracking-widest">Explore</h4>
          <ul className="space-y-3">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/product', label: 'Product' },
              { to: '/team', label: 'Team' },
              { to: '/contact', label: 'Contact' },
            ].map(link => (
              <li key={link.to}>
                <Link to={link.to} className="text-mint/60 text-sm hover:text-mint transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Network links */}
        <div>
          <h4 className="text-xs font-bold text-teal mb-6 uppercase tracking-widest">Network</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.linkedin.com/company/sensiweld"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mint/60 text-sm hover:text-mint transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:info@sensiweld.com" className="text-mint/60 text-sm hover:text-mint transition-colors">
                info@sensiweld.com
              </a>
            </li>
            <li>
              <span className="text-mint/40 text-xs">TU Delft · YES!Delft</span>
            </li>
            <li>
              <span className="text-mint/40 text-xs">TTT GreenTech</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-mint/30">
          &copy; {new Date().getFullYear()} SensiWeld. All rights reserved. TU Delft Research Initiative.
        </p>
        <div className="flex gap-6 items-center">
          <span className="text-xs text-mint/20 italic uppercase tracking-tighter">Circular Economy</span>
          <span className="text-xs text-mint/20 italic uppercase tracking-tighter">Smart Materials</span>
          <span className="text-xs text-mint/30 uppercase tracking-tighter font-bold">TTT GreenTech</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
