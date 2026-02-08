import React from 'react';
import { Link } from 'react-router-dom';
// 1. Import the hero image from your assets folder
import heroImg from '../assets/hero.png';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left py-20">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full glass border border-white/10 text-teal text-xs font-bold uppercase tracking-widest">
              Adhesive-Free Structural Integrity
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              The Future of <span className="text-gradient">Natural Composites</span> is Smart.
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Eliminating toxic adhesives through bio-based smart joints. SensiWeld offers high-strength, recyclable connections for the next generation of architectural and aerospace structures.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/product" className="btn-primary w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-dark text-lg shadow-2xl shadow-teal/20">
                Explore Technology
              </Link>
              <Link to="/contact" className="glass w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-white text-lg hover:bg-white/10 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal/20 to-purple/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative glass p-4 rounded-[2rem] border border-white/10 overflow-hidden transform hover:scale-[1.02] transition-all duration-700">
              {/* 2. Use the imported heroImg here */}
              <img 
                src={heroImg} 
                alt="SensiWeld Technology" 
                className="w-full h-[500px] rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl border border-white/5 group hover:border-teal/30 transition-colors">
              <div className="w-12 h-12 bg-teal/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Circular Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                By removing adhesives, we enable true end-of-life recyclability. Every SensiWeld joint is designed for easy disassembly and material reuse.
              </p>
            </div>
            
            <div className="glass p-8 rounded-2xl border border-white/5 group hover:border-purple/30 transition-colors">
              <div className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04c0 4.835 1.353 9.364 3.715 13.233l.057.094A12.07 12.07 0 0012 21.056c1.571 0 3.08-.162 4.532-.47l.057-.094a11.955 11.955 0 003.715-13.233z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Superior Bond</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                By fusing bio-based resins with precision mechanical interlocking, SensiWeld achieves industrial-grade shear strength while eliminating the weight and stress concentrations of traditional fasteners.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border border-white/5 group hover:border-forest/30 transition-colors">
              <div className="w-12 h-12 bg-forest/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Integrated Sensing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our integrated structural intelligence monitors health in real-time, providing a continuous data stream to predict maintenance needs and safeguard performance long before failure occurs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;