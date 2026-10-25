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
    tagline: 'Aerospace engineer and inventor of the bio-ink welding process.',
    image: team1,
    label: 'Co-Founder',
  },
  {
    name: 'Christi Raubenheimer, EngD',
    role: 'Business Developer',
    tagline: 'Commercial strategy and market entry. Architecture sector background.',
    image: team4,
    label: 'Co-Founder',
  },
  {
    name: 'Prof. Dr. Kunal Masania',
    role: 'Scientific Advisor',
    tagline: 'Bio-Inspired Composites, TU Delft.',
    image: team2,
    label: 'Advisor',
  },
  {
    name: 'Dr. Prem Sundaramoorthy',
    role: 'Strategic Advisor',
    tagline: 'Technology commercialisation.',
    image: team3,
    label: 'Advisor',
  },
];

const BlobPhoto: React.FC<{ src: string; alt: string; idx: number }> = ({ src, alt, idx }) => (
  <div className="relative flex items-center justify-center group">
    <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-teal/40 via-mint/20 to-forest/20 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
    <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-mint/60 group-hover:border-teal/60 transition-all duration-500 shadow-md">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-700"
        onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/300/300?random=${idx}` }}
      />
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
                <BlobPhoto src={member.image} alt={member.name} idx={idx} />
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
