import React from 'react';
import { Link } from 'react-router-dom';
// Import your PNG file
import sensiLogoPng from '../assets/logo.png'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          
          {/* Logo Link - Text removed and layout simplified */}
          <Link to="/" className="inline-block mb-8 group">
            <img 
              src={sensiLogoPng} 
              alt="SensiWeld Logo" 
              className="w-24 h-24 group-hover:scale-105 transition-transform object-contain" 
            />
          </Link>
          
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Revolutionising structural integrity in natural composites through research-backed adhesive-free smart joints. 
            An initiative born from TU Delft research labs.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-bold text-white mb-6 uppercase tracking-widest text-teal">Explore</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-gray-400 text-sm hover:text-teal transition-colors">Origins</Link></li>
            <li><Link to="/product" className="text-gray-400 text-sm hover:text-teal transition-colors">Technology</Link></li>
            <li><Link to="/team" className="text-gray-400 text-sm hover:text-teal transition-colors">Team</Link></li>
            <li><Link to="/contact" className="text-gray-400 text-sm hover:text-teal transition-colors font-bold">Partner with Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-bold text-white mb-6 uppercase tracking-widest text-purple">Network</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 text-sm hover:text-teal transition-colors">LinkedIn</a></li>
            <li><a href="#" className="text-gray-400 text-sm hover:text-teal transition-colors">Twitter</a></li>
            <li><a href="mailto:info@sensiweld.com" className="text-gray-400 text-sm hover:text-teal transition-colors">Email Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} SensiWeld. All rights reserved. TU Delft Research Initiative.
        </p>
        <div className="flex gap-6">
          <span className="text-xs text-gray-500 italic uppercase tracking-tighter">Circular Economy</span>
          <span className="text-xs text-gray-500 italic uppercase tracking-tighter">Smart Materials</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;