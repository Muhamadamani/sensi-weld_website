import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // This function handles the actual data transmission to Netlify
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Netlify expects a URL-encoded string for form submissions
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("Netlify Form Error:", error);
        alert("There was an error sending your message. Please try again or email us directly at info@sensiweld.com");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">Let's <span className="text-gradient">Innovate</span> Together</h1>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          We are actively seeking architectural firms and aerospace manufacturers for research partnerships and collaborative development. Reach out to discuss how SensiWeld can transform your assembly process.
        </p>
        
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/5 flex-shrink-0">
               <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1 text-white">Our Lab</h4>
              <p className="text-gray-400 text-sm">TU Delft Campus, Aerospace Engineering<br />Delft, The Netherlands</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/5 flex-shrink-0">
               <svg className="w-5 h-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1 text-white">General Enquiries</h4>
              <p className="text-gray-400 text-sm">info@sensiweld.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-8 md:p-12 rounded-3xl border border-white/10">
        {submitted ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
            <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center text-teal mb-4 animate-bounce">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">Enquiry Received</h3>
            <p className="text-gray-400">Thank you for your interest. A member of the venture team will contact you shortly.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 text-teal text-sm font-bold hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          /* Netlify Form Implementation */
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            name="contact" 
            method="POST" 
            data-netlify="true"
          >
            {/* Required for Netlify to identify the form in a React app */}
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@aerospace.co"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Enquiry Category</label>
              <select 
                name="category"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition-colors"
              >
                <option value="aerospace">Aerospace Partnership</option>
                <option value="architectural">Architectural Collaboration</option>
                <option value="research">Academic Research</option>
                <option value="investment">Investment Opportunity</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Message</label>
              <textarea 
                name="message"
                rows={4} 
                required
                placeholder="Tell us about your interest in SensiWeld..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full btn-primary py-4 rounded-lg font-bold text-dark text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest mt-4">
              Secure Research Portal
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;