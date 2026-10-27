import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
        } else {
          throw new Error('Submission failed');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Something went wrong. Please try again or email info@sensiweld.com');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple">
            Let's explore <span className="text-gradient">your application.</span>
          </h1>
          <p className="text-xl text-navy/60 max-w-2xl mx-auto leading-relaxed">
            We welcome discussions with composite manufacturers, material and resin partners, and industrial collaborators.
          </p>
        </div>
      </section>

      {/* Main layout */}
      <section className="py-20 px-6 bg-sage">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left info */}
          <div>
            <h2 className="text-2xl font-bold text-purple mb-8">Reach the Team</h2>
            <div className="space-y-7 mb-10">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center border border-mint flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">General Enquiries</h4>
                  <a href="mailto:info@sensiweld.com" className="text-teal text-sm font-bold hover:underline">info@sensiweld.com</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center border border-mint flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Our Lab</h4>
                  <p className="text-navy/60 text-sm">TU Delft, Faculty of Aerospace Engineering<br />Kluyverweg 1, 2629 HS Delft, The Netherlands</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center border border-mint flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-teal">
                    <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.046c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.37 4.267 5.455v6.283zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/company/sensiweld" target="_blank" rel="noopener noreferrer" className="text-teal text-sm font-bold hover:underline">linkedin.com/company/sensiweld</a>
                </div>
              </div>
            </div>

            {/* Who we work with */}
            <div className="bg-white p-8 rounded-2xl border border-mint shadow-sm">
              <h4 className="text-navy font-bold mb-4 text-sm">We would love to hear from you if you are</h4>
              <ul className="space-y-3">
                {[
                  'An investor interested in deep-tech sustainability',
                  'A composite manufacturer looking for bio-based bonding',
                  'A material or resin partner',
                  'An industry expert in transport or aerospace',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-navy/60 text-sm">
                    <span className="text-teal font-bold">&#8594;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-mint shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center text-teal mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy">Message Received</h3>
                <p className="text-navy/60">Thank you. We will be in touch within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-teal text-sm font-bold hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-5">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label className="block text-xs uppercase font-bold text-navy/50 mb-2" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-sage border border-mint rounded-lg px-4 py-3 text-navy placeholder-navy/30 focus:outline-none focus:border-teal focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-navy/50 mb-2" htmlFor="email">Work Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full bg-sage border border-mint rounded-lg px-4 py-3 text-navy placeholder-navy/30 focus:outline-none focus:border-teal focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-navy/50 mb-2" htmlFor="organisation">Organisation</label>
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    placeholder="Company or institution name"
                    className="w-full bg-sage border border-mint rounded-lg px-4 py-3 text-navy placeholder-navy/30 focus:outline-none focus:border-teal focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-navy/50 mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your interest..."
                    className="w-full bg-sage border border-mint rounded-lg px-4 py-3 text-navy placeholder-navy/30 focus:outline-none focus:border-teal focus:bg-white transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full btn-primary py-4 rounded-xl font-bold text-white text-base shadow-md shadow-teal/20 hover:shadow-teal/40 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Sending...' : 'Discuss your application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
