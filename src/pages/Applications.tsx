import React from 'react';
import { Link } from 'react-router-dom';

const applications = [
  {
    id: '01',
    phase: 'Phase 1: Beachhead',
    title: 'Furniture and Interiors',
    detail: [
      'Lowest regulatory friction of all target markets.',
      'Companies with 2030 sustainability strategies show urgent and documented demand for bio-based panel materials.',
      'Active pilot discussions underway.',
      'Adhesive and ultrasonic welding routes both applicable.',
    ],
    phaseColor: 'text-teal',
    borderColor: 'border-teal/30',
    bg: 'bg-teal/5',
  },
  {
    id: '02',
    phase: 'Phase 2: Expansion',
    title: 'Architectural Applications',
    detail: [
      'Natural next step with the same material systems, scaling to larger structural applications.',
      'Strong BREEAM and LEED sustainability certification pressure in the Netherlands and across the EU creates structured demand.',
      'University collaboration on architectural structures underway.',
    ],
    phaseColor: 'text-forest',
    borderColor: 'border-forest/30',
    bg: 'bg-forest/5',
  },
  {
    id: '03',
    phase: 'Phase 3: Scale',
    title: 'Automotive Interiors',
    detail: [
      'EV weight-reduction and EU recyclability directives create a long-term structural incentive to replace conventional composite interiors.',
      'Longer sales cycles than furniture but significant volume and royalty potential at scale.',
      'Material qualification work required.',
    ],
    phaseColor: 'text-navy/50',
    borderColor: 'border-navy/15',
    bg: 'bg-navy/3',
  },
  {
    id: '04',
    phase: 'Longer-term',
    title: 'Aerospace Interiors',
    detail: [
      'Weight savings and end-of-life recyclability are compelling for aerospace interior fittings.',
      'Requires further material qualification and EASA certification pathways.',
      'High value per unit when qualification is achieved.',
      'A longer-term opportunity; we are monitoring this pathway rather than pursuing it immediately.',
    ],
    phaseColor: 'text-navy/40',
    borderColor: 'border-navy/10',
    bg: 'bg-white',
  },
];

const Applications: React.FC = () => {
  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple">
            Phased Entry into <span className="text-gradient">High-Value Markets</span>
          </h1>
          <p className="text-xl text-navy/60 max-w-2xl mx-auto leading-relaxed">
            We are sequencing entry by regulatory friction and sustainability urgency, beginning where we can demonstrate value fastest and scale with confidence.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {applications.map(app => (
            <div key={app.id} className={`${app.bg} rounded-2xl border ${app.borderColor} p-8 md:p-10`}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-5xl font-black text-navy/8">{app.id}</span>
                </div>
                <div className="flex-grow">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${app.phaseColor}`}>
                    {app.phase}
                  </p>
                  <h2 className="text-2xl font-bold text-purple mb-5">{app.title}</h2>
                  <ul className="space-y-3">
                    {app.detail.map(d => (
                      <li key={d} className="flex items-start gap-3 text-navy/60 text-sm leading-relaxed">
                        <span className="text-teal font-bold mt-0.5 flex-shrink-0">&#8594;</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pilot discussions note */}
      <section className="py-14 px-6 bg-sage">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-mint p-8 md:p-10">
          <h3 className="text-lg font-bold text-navy mb-3">Potential Pilot Projects</h3>
          <p className="text-navy/60 text-sm leading-relaxed mb-6">
            We are in early-stage discussions with a number of potential partners across furniture, architecture and drone applications. These are development conversations, not confirmed agreements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Delft Drone Initiative', context: 'Drone application, performance and flight testing.' },
              { name: 'AXXOR', context: 'Panel application. Potential collaboration for honeycomb sandwich panels.' },
              { name: 'Bundle Studio', context: 'Furniture application. Premium furniture market collaboration.' },
              { name: 'TU Munich', context: 'Architectural application. Small structures, university collaboration.' },
            ].map(p => (
              <div key={p.name} className="bg-sage rounded-xl p-5 border border-mint">
                <h4 className="text-navy font-bold text-sm mb-1">{p.name}</h4>
                <p className="text-navy/50 text-xs leading-relaxed">{p.context}</p>
              </div>
            ))}
          </div>
          <p className="text-navy/30 text-xs mt-5 italic">
            Note: no MOU or LOI is signed with all parties listed. These represent active discussions only.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <h3 className="text-2xl font-bold text-navy mb-4">Work with us on your application</h3>
        <p className="text-navy/60 mb-8 max-w-xl mx-auto">
          We are flexible on application: panels, structural components or packaging. Get in touch to discuss how our materials and process can address your specific requirements.
        </p>
        <Link to="/contact" className="btn-primary px-10 py-4 rounded-xl font-bold text-white shadow-lg shadow-teal/20 hover:shadow-teal/40 transition-all inline-block">
          Discuss your application
        </Link>
      </section>

    </div>
  );
};

export default Applications;
