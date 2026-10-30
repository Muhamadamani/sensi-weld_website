import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supporters } from '../config/supporters';
import honeycombImg from '../assets/honeycomb.png';
import architectureImg from '../assets/architecture.png';
import automotiveImg from '../assets/automotive.png';
import aerospaceImg from '../assets/aerospace.png';

// ── Logo placeholder component ─────────────────────────────────────────────
const SupporterLogo: React.FC<{
  name: string;
  altText: string;
  logoPath: string | null;
  url: string | null;
}> = ({ name, altText, logoPath, url }) => {
  const inner = logoPath ? (
    <img src={logoPath} alt={altText} style={{ height: '120px', maxWidth: '200px', objectFit: 'contain' }} />
  ) : (
    <div className="flex flex-col items-center gap-2">
      <div className="w-10 h-6 bg-navy/10 rounded flex items-center justify-center">
        <svg className="w-4 h-4 text-navy/25" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
      </div>
      <span className="text-navy/50 text-[11px] font-bold text-center leading-tight">{name}</span>
    </div>
  );

  const cls = 'flex items-center justify-center px-8 py-4';

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={altText} className={cls}>
      {inner}
    </a>
  ) : (
    <div aria-label={altText} className={cls}>
      {inner}
    </div>
  );
};

// ── Animated counter (triggers once on scroll into view) ───────────────────
const CountUp: React.FC<{ target: number; suffix: string; triggered: boolean; duration?: number }> = ({
  target, suffix, triggered, duration = 1600,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered || target === 0) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [triggered, target, duration]);

  return <>{count}{suffix}</>;
};

// ── Page ────────────────────────────────────────────────────────────────────
const Home: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const statItems = [
    { target: 914, suffix: ' kt', label: 'Composite waste in Europe (2025)' },
    { target: 5,   suffix: '%',   label: 'Currently recycled at end of life' },
    { target: 100, suffix: '%',   label: 'Fossil feedstock in most adhesives' },
  ];

  const markets = [
    {
      title: 'Furniture and Architectural Interiors',
      phase: 'Beachhead',
      phaseColor: 'text-teal',
      img: architectureImg,
      alt: 'Bio-composite furniture and architectural interior applications',
      body: 'Our initial market focus spans furniture panels and architectural interiors. Lowest regulatory friction, strong near-term sustainability demand, and BREEAM/LEED pressure creating structured pull across Europe.',
    },
    {
      title: 'Automotive Interiors',
      phase: 'Phase 2',
      phaseColor: 'text-navy/50',
      img: automotiveImg,
      alt: 'Bio-composite automotive interior panel',
      body: 'EV weight-reduction and EU recyclability directives create long-term structural incentive.',
    },
    {
      title: 'Aerospace Interiors',
      phase: 'Longer-term',
      phaseColor: 'text-navy/40',
      img: aerospaceImg,
      alt: 'Aerospace interior composite panel',
      body: 'Weight savings and end-of-life recyclability compelling, requiring further qualification.',
    },
  ];

  return (
    <div className="flex flex-col">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center justify-center px-6 overflow-hidden bg-cream">
        {/* Seven independently drifting Brownian blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* — Teal blobs — */}
          <div className="absolute top-[28%] left-[15%] w-[560px] h-[560px] rounded-full animate-blob1"
               style={{ background: 'radial-gradient(circle, rgba(42,188,161,0.35) 0%, rgba(42,188,161,0) 68%)', filter: 'blur(40px)' }} />
          <div className="absolute top-[8%] right-[10%] w-[420px] h-[420px] rounded-full animate-blob2"
               style={{ background: 'radial-gradient(circle, rgba(42,188,161,0.22) 0%, rgba(42,188,161,0) 68%)', filter: 'blur(35px)' }} />
          <div className="absolute bottom-[10%] left-[40%] w-[320px] h-[320px] rounded-full animate-blob3"
               style={{ background: 'radial-gradient(circle, rgba(42,188,161,0.28) 0%, rgba(42,188,161,0) 68%)', filter: 'blur(30px)' }} />
          <div className="absolute top-[55%] right-[28%] w-[240px] h-[240px] rounded-full animate-blob4"
               style={{ background: 'radial-gradient(circle, rgba(42,188,161,0.30) 0%, rgba(42,188,161,0) 68%)', filter: 'blur(28px)' }} />
          <div className="absolute top-[15%] left-[42%] w-[180px] h-[180px] rounded-full animate-blob5"
               style={{ background: 'radial-gradient(circle, rgba(42,188,161,0.25) 0%, rgba(42,188,161,0) 68%)', filter: 'blur(22px)' }} />
          <div className="absolute top-[65%] left-[8%] w-[380px] h-[380px] rounded-full animate-blob6"
               style={{ background: 'radial-gradient(circle, rgba(42,188,161,0.28) 0%, rgba(42,188,161,0) 68%)', filter: 'blur(36px)' }} />
          <div className="absolute top-[5%] left-[62%] w-[220px] h-[220px] rounded-full animate-blob7"
               style={{ background: 'radial-gradient(circle, rgba(42,188,161,0.22) 0%, rgba(42,188,161,0) 68%)', filter: 'blur(25px)' }} />
          {/* — Purple fiber lines — */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden>
            {/* Fiber 1: long sweep lower-left to upper-right */}
            <g className="animate-fib1">
              <path d="M -80,780 C 180,620 480,380 780,300 S 1160,260 1540,120"
                    fill="none" stroke="rgba(118,97,165,0.03)" strokeWidth="4" strokeLinecap="round" />
              <path d="M -80,780 C 180,620 480,380 780,300 S 1160,260 1540,120"
                    fill="none" stroke="rgba(118,97,165,0.07)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* Fiber 2: from upper-left sweeping down */}
            <g className="animate-fib2">
              <path d="M 60,-40 C 200,180 340,420 500,560 S 680,740 820,920"
                    fill="none" stroke="rgba(118,97,165,0.02)" strokeWidth="5" strokeLinecap="round" />
              <path d="M 60,-40 C 200,180 340,420 500,560 S 680,740 820,920"
                    fill="none" stroke="rgba(118,97,165,0.06)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* Fiber 3: right to left arc through upper zone */}
            <g className="animate-fib3">
              <path d="M 1560,180 C 1220,160 920,320 680,300 S 360,220 -80,380"
                    fill="none" stroke="rgba(118,97,165,0.02)" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 1560,180 C 1220,160 920,320 680,300 S 360,220 -80,380"
                    fill="none" stroke="rgba(118,97,165,0.07)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* Fiber 4: diagonal top-right to lower-left */}
            <g className="animate-fib4">
              <path d="M 1520,40 C 1220,180 960,340 720,460 S 420,600 120,820"
                    fill="none" stroke="rgba(118,97,165,0.02)" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M 1520,40 C 1220,180 960,340 720,460 S 420,600 120,820"
                    fill="none" stroke="rgba(118,97,165,0.06)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* Fiber 5: gentle S-curve across the middle */}
            <g className="animate-fib5">
              <path d="M -100,480 C 220,420 440,560 720,480 S 1020,340 1280,500 S 1460,580 1580,460"
                    fill="none" stroke="rgba(118,97,165,0.02)" strokeWidth="4" strokeLinecap="round" />
              <path d="M -100,480 C 220,420 440,560 720,480 S 1020,340 1280,500 S 1460,580 1580,460"
                    fill="none" stroke="rgba(118,97,165,0.06)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* Fiber 6: shallow arc from bottom-left to upper-right */}
            <g className="animate-fib6">
              <path d="M -100,900 C 300,700 600,500 900,380 S 1250,200 1580,80"
                    fill="none" stroke="rgba(118,97,165,0.02)" strokeWidth="4" strokeLinecap="round" />
              <path d="M -100,900 C 300,700 600,500 900,380 S 1250,200 1580,80"
                    fill="none" stroke="rgba(118,97,165,0.07)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* Fiber 7: tight curve through centre-right */}
            <g className="animate-fib7">
              <path d="M 900,-60 C 1000,150 980,380 860,520 S 620,700 580,920"
                    fill="none" stroke="rgba(118,97,165,0.02)" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M 900,-60 C 1000,150 980,380 860,520 S 620,700 580,920"
                    fill="none" stroke="rgba(118,97,165,0.06)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl w-full text-center py-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-purple">
            <span style={{ color: 'rgb(118,97,165)' }}>Composites</span> <span className="text-navy/30">that</span> <span className="text-gradient">Nature Loves</span>
          </h1>
          <p className="text-lg md:text-xl text-navy/60 mb-10 max-w-3xl mx-auto leading-relaxed">
            SensiWeld develops bio-based adhesives derived from paper-industry by-products for natural-fibre composites, with conventional and ultrasonic joining routes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white text-base shadow-lg shadow-teal/20 hover:shadow-teal/40 transition-all">
              Discuss your application
            </Link>
            <Link to="/product" className="glass w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-navy text-base hover:bg-mint/40 transition-colors border border-mint">
              Explore our technology
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. CHALLENGE (interactive) ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-sage">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-purple mb-5">
              Composites are Everywhere.<br />Recycling Them Is Almost Nowhere.
            </h2>
            <p className="text-navy/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Europe generated 914 kt of composite waste in 2025. Only 5% is recycled. The adhesive is usually why.
            </p>
          </div>

          {/* Animated stat bar */}
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {statItems.map(s => (
              <div key={s.label} className="bg-white rounded-2xl border border-mint p-5 text-center">
                <p className="text-3xl font-black text-gradient mb-1">
                  <CountUp target={s.target} suffix={s.suffix} triggered={statsVisible} />
                </p>
                <p className="text-navy/50 text-xs leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Flip cards: hover to reveal more detail */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '⬡',
                title: 'Fossil-Based Materials',
                teaser: 'Most composite adhesives use petrochemical feedstocks.',
                detail: 'UF/PF and polyurethane adhesives dominate. EU regulations are tightening. Bio-based alternatives that run on existing lines are needed now.',
                accent: 'bg-red-500',
                bg: 'bg-red-50',
                border: 'border-red-200',
              },
              {
                icon: '⏱',
                title: 'Slow Curing',
                teaser: 'Cure times limit throughput and add energy cost.',
                detail: 'Conventional curing cycles run from minutes to hours. Ultrasonic welding brings that down to seconds.',
                accent: 'bg-orange-400',
                bg: 'bg-orange-50',
                border: 'border-orange-200',
              },
              {
                icon: '♻',
                title: 'End-of-Life',
                teaser: 'Conventional adhesives make recycling practically impossible.',
                detail: 'Thermoset adhesives cannot be re-melted, so structures end up in landfill. Bio-based bonding is a prerequisite for circular composites.',
                accent: 'bg-amber-400',
                bg: 'bg-amber-50',
                border: 'border-amber-200',
              },
            ].map(card => (
              <div
                key={card.title}
                className={`group relative ${card.bg} rounded-2xl border ${card.border} p-8 overflow-hidden cursor-default hover:shadow-lg transition-all duration-300`}
              >
                <div className={`absolute top-0 left-0 w-1 h-full ${card.accent} rounded-l-2xl`} />
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-navy mb-3">{card.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed group-hover:opacity-0 group-hover:h-0 group-hover:overflow-hidden transition-all duration-200">
                  {card.teaser}
                </p>
                <p className="text-navy/70 text-sm leading-relaxed opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
                  {card.detail}
                </p>
                <p className="mt-4 text-xs text-navy/30 group-hover:text-navy/60 font-bold uppercase tracking-widest transition-colors">
                  <span className="group-hover:hidden">Hover to learn more</span>
                  <span className="hidden group-hover:inline">SensiWeld addresses this</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MARKETS WITH IMAGES ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-purple mb-5">
              Phased Entry, <span className="text-gradient">Focused Execution</span>
            </h2>
            <p className="text-navy/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Sequenced by regulatory friction and sustainability urgency, beginning where we can move fastest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {markets.map(m => (
              <div key={m.title} className="group rounded-2xl overflow-hidden border border-mint hover:border-teal/40 hover:shadow-md transition-all bg-sage">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.alt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/90 ${m.phaseColor}`}>
                    {m.phase}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">{m.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CONTACT CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-sage">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-purple mb-6">
            Let's explore <span className="text-gradient">your application.</span>
          </h2>
          <p className="text-navy/60 text-lg mb-10 leading-relaxed">
            Manufacturers, material partners, research collaborators. Let's talk.
          </p>
          <Link to="/contact" className="btn-primary px-10 py-5 rounded-xl font-bold text-white text-lg shadow-lg shadow-teal/20 hover:shadow-teal/40 transition-all inline-block">
            Discuss your application
          </Link>
        </div>
      </section>

      {/* ── 5. SUPPORTED BY ─────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white border-t border-mint">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg font-bold text-navy/50 text-center uppercase tracking-[0.3em] mb-10">
            Supported by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {supporters.map((s) => (
              <SupporterLogo
                key={s.name}
                name={s.name}
                altText={s.altText}
                logoPath={s.logoPath}
                url={s.url}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
