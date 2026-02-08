import React from 'react';
// Import the faculty image from your assets folder
import aerospaceFacultyImg from '../src/assets/aerospace-faculty.png';

const About: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Rooted in <span className="text-gradient">TU Delft</span> Research</h1>
        <p className="text-xl text-gray-400 leading-relaxed mb-8">
          SensiWeld was born in the laboratories of TU Delft, driven by a simple question: How can we build high-performance structures that respect the planetary boundaries?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">The Origin Story</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Our technology originates from years of academic rigour at the Faculty of Aerospace Engineering and Industrial Design Engineering. We identified a critical bottleneck in natural composite manufacturing: the use of non-recyclable, petrochemical-based adhesives that render sustainable materials impossible to repurpose.
          </p>
          <p className="text-gray-400 leading-relaxed text-white">
            By leveraging advanced additive manufacturing and topology optimisation, our research team developed a method to fuse bio-based panels without a single drop of traditional glue.
          </p>
        </div>

        {/* Updated Image Container for the Aerospace Faculty */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-br from-purple/20 to-teal/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative glass rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square">
            <img 
              src={aerospaceFacultyImg} 
              alt="TU Delft Faculty of Aerospace Engineering" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-teal">Delft, Netherlands</p>
              <h3 className="text-white font-bold text-sm">Aerospace Engineering Faculty</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-12 rounded-3xl border border-white/5 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Mission for a Circular Economy</h2>
          <p className="text-gray-400 leading-relaxed mb-6 text-lg">
            SensiWeld aims to decouple structural performance from environmental degradation. We provide the "connective tissue" for a world where architectural components and aerospace parts can be returned to the soil or re-processed indefinitely.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-center">
            <div>
              <div className="text-4xl font-bold text-teal mb-2">100%</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">Recyclable</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple mb-2">0</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">Toxic Adhesives</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-forest mb-2">50%</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">CO2 Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;