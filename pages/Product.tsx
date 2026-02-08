import React from 'react';

// 1. Import your product and application PNGs here
// Adjust the paths based on your actual folder structure (e.g., ../assets/)
import honeycombImg from '../src/assets/honeycomb.png';
import architectureImg from '../src/assets/architecture.png';
import automotiveImg from '../src/assets/automotive.png';
import aerospaceImg from '../src/assets/aerospace.png';

const Product: React.FC = () => {
  const applications = [
    {
      title: 'Architectural Interiors',
      description: 'Sustainable acoustic panels and modular wall systems for carbon-neutral buildings.',
      image: architectureImg,
      fallback: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      id: '01'
    },
    {
      title: 'Automotive',
      description: 'Lightweight structural components for electric vehicles, focusing on bio-based circularity.',
      image: automotiveImg,
      fallback: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      id: '02'
    },
    {
      title: 'Aerospace Interiors',
      description: 'Weight-critical interior fittings that meet stringent safety and environmental standards.',
      image: aerospaceImg,
      fallback: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
      id: '03'
    }
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Structural <span className="text-gradient">Solutions</span></h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          From aerospace to high-end interiors, SensiWeld provides the connection technology for the circular economy.
        </p>
      </div>

      {/* Honeycomb Panels Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-purple/20 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
          <div className="relative glass p-2 rounded-[2rem] overflow-hidden border border-white/10">
            <img 
              src={honeycombImg} 
              alt="Honeycomb Core Panel" 
              className="w-full h-[450px] object-cover rounded-[1.8rem] grayscale group-hover:grayscale-0 transition-all duration-1000"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200' }}
            />
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">Smart Honeycomb Panels</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Our honeycomb structures leverage nature's most efficient geometry. Integrated with SensiWeld joints, these panels offer unprecedented strength-to-weight ratios while remaining fully recyclable.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-6 rounded-2xl border border-white/5">
              <span className="text-teal text-xl font-bold block mb-1">Ultra-Light</span>
              <span className="text-gray-500 text-sm">Minimal material usage</span>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5">
              <span className="text-purple text-xl font-bold block mb-1">Impact Resistance</span>
              <span className="text-gray-500 text-sm">Advanced energy absorption</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Applications */}
      <div className="mb-40">
        <h2 className="text-4xl font-bold mb-16 text-center">Core <span className="text-gradient">Applications</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {applications.map((app) => (
            <div key={app.id} className="group relative flex flex-col h-full glass rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  onError={(e) => { (e.target as HTMLImageElement).src = app.fallback }}
                />
                <div className="absolute top-6 left-6 glass px-3 py-1 rounded-full border border-white/10">
                  <span className="text-white text-[10px] font-bold tracking-widest uppercase">{app.id}</span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-4">{app.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {app.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-teal to-purple w-0 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Simplified Tech Specs */}
      <div className="bg-gradient-to-br from-dark to-black p-12 lg:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 blur-[120px] rounded-full" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> 
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">High Performance.</h2>
            <p className="text-gray-400 text-lg">Our technology matches the strength of traditional chemical adhesives without the environmental cost.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-12">
            <div>
              <p className="text-teal font-black text-4xl mb-1">High</p>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold">Bond Strength</p>
            </div>
            <div>
              <p className="text-white font-black text-4xl mb-1">100%</p>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold">Bio-Based</p>
            </div>
            <div>
              <p className="text-white font-black text-4xl mb-1">Zero</p>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold">Toxic Glues</p>
            </div>
            <div>
              <p className="text-purple font-black text-4xl mb-1">Real-Time</p>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold">Health Sensing</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="mt-32 text-center">
        <button className="btn-primary px-12 py-5 rounded-full font-bold text-dark text-lg hover:shadow-2xl hover:shadow-teal/40 transition-all">
          Request Technical Summary
        </button>
      </div> */}
    </div>
  );
};

export default Product;