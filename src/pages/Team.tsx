import React from 'react';

// Import your team PNGs here
import team1 from '../assets/team-1.png';
import team2 from '../assets/team-2.png';
import team3 from '../assets/team-3.png';
import team4 from '../assets/team-4.png';

const Team: React.FC = () => {
  const members = [
    {
      name: 'Muhamad Amani',
      role: 'Venture Lead',
      bio: ' ',
      image: team1
    },
       {
      name: 'Martin Kampinga',
      role: 'Business Advisor',
      bio: ' ',
      image: team4
    },
    {
      name: 'Prof. Kunal Masania',
      role: 'Scientific Advisor',
      bio: ' ',
      image: team2
    },
    {
      name: 'Prem Sundaramoorthy',
      role: 'Scientific Advisor',
      bio: ' ',
      image: team3
    }
 
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Built by <span className="text-gradient">Innovators</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          Our cross-disciplinary team combines world-class aerospace engineering research with agile business development strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, idx) => (
          <div key={member.name} className="group">
            <div className="relative overflow-hidden rounded-2xl mb-6 glass border border-white/5 aspect-[4/5]">
               <img 
                 src={member.image} 
                 alt={member.name} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                 onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/400/500?random=${idx}` }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-6 left-6 right-6">
                 <h3 className="text-xl font-bold text-white leading-tight">{member.name}</h3>
                 <p className="text-teal font-medium text-xs mt-1 uppercase tracking-wider">{member.role}</p>
               </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed px-2">
              {member.bio}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="mt-24 p-12 glass rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h4 className="text-2xl font-bold mb-2 text-white">Join our research network</h4>
          <p className="text-gray-400 text-sm">We are always looking for PhD candidates and R&D partners.</p>
        </div>
        <button className="btn-primary px-8 py-3 rounded-lg font-bold text-dark whitespace-nowrap transition-all hover:shadow-lg hover:shadow-teal/20">
          View Opportunities
        </button>
      </div> */}
    </div>
  );
};

export default Team;