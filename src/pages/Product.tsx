import React, { useState } from 'react';
import productImg from '../assets/product.JPG';
import { Link } from 'react-router-dom';

const steps = [
  {
    num: '01',
    label: 'Bio-Based Adhesive',
    tag: 'Formulation',
    bgActive: 'bg-teal',
    borderActive: 'border-teal',
    textColor: 'text-teal',
    detail: '100% bio-derived from paper-industry by-products. Drop-in replacement for formaldehyde-based (UF/PF) and polyurethane adhesives.',
  },
  {
    num: '02',
    label: 'Conventional Manufacturing',
    tag: 'Process',
    bgActive: 'bg-forest',
    borderActive: 'border-forest',
    textColor: 'text-forest',
    detail: 'Designed to work with existing hot-press lines. No new capital equipment required to adopt bio-based bonding.',
  },
  {
    num: '03',
    label: 'Ultrasonic Welding',
    tag: 'Joining',
    bgActive: 'bg-teal',
    borderActive: 'border-teal',
    textColor: 'text-teal',
    detail: 'Seconds-long joining cycles on natural-fibre composites. Low energy, no curing wait, established industrial tooling.',
  },
];

const Product: React.FC = () => {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple">
            A Bio-Based Materials <span className="text-gradient">Platform</span>
          </h1>
          <p className="text-lg text-navy/60 max-w-2xl mx-auto leading-relaxed">
            Adhesive and joining solutions for natural-fibre composites, starting from paper-industry by-products.
          </p>
        </div>
      </section>

      {/* Visual + intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-teal/5 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity rounded-3xl" />
            <div className="relative glass p-2 rounded-[2rem] overflow-hidden border border-mint shadow-sm">
              <img
                src={productImg}
                alt="SensiWeld bio-composite material"
                className="w-full h-[420px] object-cover rounded-[1.8rem] transition-all duration-1000"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-5 text-purple">The core insight</h2>
            <p className="text-navy/60 text-lg mb-8 leading-relaxed">
              Natural-fibre composites still rely on fossil-based adhesives at the bondline. We replace them with a bio-derived adhesive and an ultrasonic joining route that eliminates curing wait times.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-5 rounded-xl border border-mint">
                <span className="text-teal text-lg font-bold block mb-1">100% bio-based</span>
                <span className="text-navy/50 text-xs uppercase tracking-wider font-bold">Adhesive</span>
              </div>
              <div className="glass p-5 rounded-xl border border-mint">
                <span className="text-forest text-lg font-bold block mb-1">Seconds-long</span>
                <span className="text-navy/50 text-xs uppercase tracking-wider font-bold">Weld cycles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Technology Stepper */}
      <section className="py-20 px-6 bg-sage">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple text-center mb-16">Four Technology Routes</h2>

          {/* Step indicators with connecting line */}
          <div className="relative flex items-start justify-between mb-10 px-4">
            <div className="absolute left-[10%] right-[10%] top-7 h-px bg-navy/10 z-0" />
            {steps.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActive(i)}
                className="relative z-10 flex flex-col items-center gap-3 group flex-1"
              >
                <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center font-black text-sm transition-all duration-300 ${
                  active === i
                    ? `${s.bgActive} border-transparent text-white shadow-lg scale-110`
                    : 'bg-white border-navy/15 text-navy/35 group-hover:border-teal/30 group-hover:scale-105'
                }`}>
                  {s.num}
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-wide text-center transition-colors leading-tight px-1 ${
                  active === i ? s.textColor : 'text-navy/35 group-hover:text-navy/60'
                }`}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div className="bg-white rounded-2xl border border-mint p-8 md:p-10 min-h-[140px] transition-all duration-300">
            <div className="flex items-start gap-6">
              <span className={`text-7xl font-black opacity-10 select-none leading-none flex-shrink-0 ${step.textColor}`}>{step.num}</span>
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${step.textColor}`}>{step.tag}</p>
                <h3 className="text-xl font-bold text-navy mb-3">{step.label}</h3>
                <p className="text-navy/60 leading-relaxed">{step.detail}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-8 justify-end">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'bg-teal w-6' : 'bg-navy/20 w-1.5 hover:bg-navy/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-sage text-center">
        <h3 className="text-2xl font-bold text-navy mb-4">Want to work with our materials?</h3>
        <Link to="/contact" className="btn-primary px-10 py-4 rounded-xl font-bold text-white shadow-lg shadow-teal/20 hover:shadow-teal/40 transition-all inline-block">
          Discuss your application
        </Link>
      </section>

    </div>
  );
};

export default Product;
