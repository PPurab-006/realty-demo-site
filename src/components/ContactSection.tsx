'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

type FormState = 'idle' | 'loading' | 'success';

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, '')))
      newErrors.phone = 'Enter a valid 10-digit Indian phone number';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Enter a valid email';
    if (!formData.project) newErrors.project = 'Select a project';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setFormState('loading');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        setFormState('idle');
        setFormData({ name: '', phone: '', email: '', project: '', message: '' });
      }, 3000);
    }, 2000);
  };

  const inputClasses =
    'w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-white/[0.07] transition-all duration-300';

  return (
    <section id="contact" className="relative bg-brand-black py-32 overflow-hidden">
      {/* Map placeholder background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.08),transparent_60%)]" />
        {/* Simulated map elements */}
        <div className="absolute top-1/3 left-1/4 w-64 h-px bg-brand-gold/10 rotate-45" />
        <div className="absolute top-1/2 left-1/3 w-48 h-px bg-brand-gold/10 -rotate-12" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-px bg-brand-gold/10 rotate-30" />
        <div className="absolute top-1/4 right-1/3 w-40 h-px bg-brand-gold/15 rotate-[60deg]" />
        {/* Map pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 rounded-full bg-brand-gold/20 animate-ping" />
          <div className="absolute inset-0 w-4 h-4 rounded-full bg-brand-gold/40" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-6 leading-tight">
              Begin Your<br />
              <span className="text-brand-gold">Journey Home</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 leading-relaxed">
              Schedule a private site visit or request detailed brochures
              for any of our signature projects. Our team will respond within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-brand-gold/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider">Visit Us</p>
                  <p className="text-white/70 text-sm">C-Scheme, Jaipur, Rajasthan 302001</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-brand-gold/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider">Call Us</p>
                  <p className="text-white/70 text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-brand-gold/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider">Email</p>
                  <p className="text-white/70 text-sm">info@prestigelandmarks.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 md:p-10 bg-white/[0.03] backdrop-blur-xl border border-white/10">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-gold/40" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brand-gold/40" />

              <h3 className="font-display text-2xl text-white font-bold mb-2">Enquire Now</h3>
              <p className="text-white/30 text-sm mb-8">Fill in your details and we&apos;ll reach out to you.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`${inputClasses} ${errors.name ? 'border-red-500/50' : ''}`}
                    id="contact-name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`${inputClasses} ${errors.phone ? 'border-red-500/50' : ''}`}
                      id="contact-phone"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`${inputClasses} ${errors.email ? 'border-red-500/50' : ''}`}
                      id="contact-email"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className={`${inputClasses} ${errors.project ? 'border-red-500/50' : ''} ${!formData.project ? 'text-white/30' : ''}`}
                    id="contact-project"
                  >
                    <option value="" className="bg-brand-black">Select Project Interest *</option>
                    {projects.map((p) => (
                      <option key={p.id} value={p.name} className="bg-brand-black text-white">
                        {p.name}
                      </option>
                    ))}
                  </select>
                  {errors.project && <p className="text-red-400 text-xs mt-1">{errors.project}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Your Message (optional)"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                    id="contact-message"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState !== 'idle'}
                  className="relative w-full py-4 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-black font-semibold text-sm tracking-[0.2em] uppercase overflow-hidden group disabled:opacity-70 transition-opacity"
                  data-hoverable
                  id="contact-submit"
                >
                  {formState === 'idle' && (
                    <span className="relative z-10">Submit Enquiry</span>
                  )}
                  {formState === 'loading' && (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Submitting...</span>
                    </div>
                  )}
                  {formState === 'success' && (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Thank you! We&apos;ll contact you soon.</span>
                    </div>
                  )}
                  {/* Shine sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
