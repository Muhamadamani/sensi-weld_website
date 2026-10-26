import React from 'react';
import team1 from '../assets/team-1.png';
import team2 from '../assets/team-2.png';
import team3 from '../assets/team-3.png';
import team4 from '../assets/team-4.png';
import { Link } from 'react-router-dom';

const members = [
  {
    name: 'Dr. Mo Amani',
    role: 'Technical Lead and Inventor',
    image: team1,
    label: 'Co-Founder',
    linkedin: 'https://www.linkedin.com/in/muhamad-amani/',
  },
  {
    name: 'Christi Raubenheimer, EngD',
    role: 'Business Developer',
    image: team4,
    label: 'Co-Founder',
    linkedin: 'http://www.linkedin.com/in/christiraubenheimer',
  },
  {
    name: 'Prof. Dr. Kunal Masania',
    role: 'Scientific Advisor',
    image: team2,
    label: 'Advisor',
    linkedin: 'https://www.linkedin.com/in/kunal-masania-67427914/',
  },
  {
    name: 'Dr. Prem Sundaramoorthy',
    role: 'Strategic Advisor',
    image: team3,
    label: 'Advisor',
    linkedin: 'https://www.linkedin.com/in/premsundaramoorthy/',
  },
];

const BlobPhoto: React.FC<{ src: string; alt: string; idx: number; linkedin: string }> = ({ src, alt, idx, linkedin }) => (
  <div className="relative flex items-center justify-center group">
    <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-teal/40 via-mint/20 to-forest/20 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
    <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-mint/60 group-hover:border-teal/60 transition-all duration-500 shadow-md">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-700"
        onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/300/300?random=${idx}` }}
      />
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center bg-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="LinkedIn profile"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10 drop-shadow-lg">
          <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.046c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.37 4.267 5.455v6.283zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>
  </div>
);

const Team: React.FC = () => {
  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple">
            Science and <span className="text-gradient">Commercial Edge</span>
          </h1>
          <p className="text-lg text-navy/60 max-w-xl mx-auto leading-relaxed">
            Materials science and business development, rooted at TU Delft.
          </p>
        </div>
      </section>

      {/* All members in one row */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {members.map((member, idx) => (
              <div key={member.name} className="flex flex-col items-center text-center gap-5">
                <BlobPhoto src={member.image} alt={member.name} idx={idx} linkedin={member.linkedin} />
                <div>
                  <p className="text-navy/30 text-[10px] font-bold uppercase tracking-widest mb-1">{member.label}</p>
                  <h3 className="text-base font-bold text-navy">{member.name}</h3>
                  <p className="text-teal text-xs font-bold uppercase tracking-wider mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-sage text-center">
        <h3 className="text-2xl font-bold text-navy mb-4">Join our research network</h3>
        <p className="text-navy/55 text-sm mb-8 max-w-sm mx-auto">
          PhD candidates, industry co-developers, and strategic collaborators welcome.
        </p>
        <Link to="/contact" className="btn-primary px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-teal/20 hover:shadow-teal/40 transition-all inline-block">
          Get in Touch
        </Link>
      </section>

    </div>
  );
};

export default Team;
