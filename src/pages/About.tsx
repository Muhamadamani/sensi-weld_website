import React from 'react';
import aboutImg from '../assets/about.JPG';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple">
            Sustainable Manufacturing <span className="text-gradient">Starts Here</span>
          </h1>
          <p className="text-xl text-navy/60 max-w-2xl leading-relaxed">
            Born at TU Delft. Built to make bio-based composites viable from production to end of life.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-5 text-purple">The Origin</h2>
            <p className="text-navy/60 leading-relaxed mb-4">
              Natural-fibre composites offer real sustainability advantages, but they still rely on fossil-based adhesives, which defeats the purpose of building sustainable materials. We set out to fix the bondline.
            </p>
            <p className="text-navy/60 leading-relaxed">
              Our bio-based adhesive comes from paper-industry waste. Alongside it, ultrasonic welding brings weld cycles down from hours to seconds.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-teal/10 to-mint blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
            <div className="relative glass rounded-[2.5rem] overflow-hidden border border-mint shadow-sm">
              <img
                src={aboutImg}
                alt="Ultrasonic welding of natural-fibre composites"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 px-6 bg-sage">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-purple mb-12 text-center">Why It Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                heading: 'Drop the fossil chemistry',
                body: 'Bio-based adhesive from paper-industry waste. No petrochemical feedstock at the bondline.',
                border: 'border-teal/20',
              },
              {
                heading: 'Existing infrastructure',
                body: 'Works on compatible hot-press lines. No new equipment required.',
                border: 'border-forest/20',
              },
              {
                heading: 'Circular end of life',
                body: 'Removing fossil adhesives is the prerequisite for recyclable natural-fibre composites.',
                border: 'border-teal/20',
              },
            ].map(card => (
              <div key={card.heading} className={`bg-white p-8 rounded-2xl border ${card.border}`}>
                <h3 className="text-navy font-bold text-lg mb-3">{card.heading}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-5 text-purple">Our Mission</h2>
          <p className="text-navy/60 leading-relaxed mb-8 text-lg">
            Make bio-based composites commercially viable, from production through to end of life, so the industry can meet its 2030 sustainability commitments.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-3 rounded-xl font-bold text-white shadow-md shadow-teal/20 hover:shadow-teal/40 transition-all inline-block">
            Work with us
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
