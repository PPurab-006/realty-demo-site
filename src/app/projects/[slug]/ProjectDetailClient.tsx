'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import * as LucideIcons from 'lucide-react';

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(heroScroll, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  // Handle sticky nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'amenities', 'location', 'gallery', 'contact'];
      let currentSection = sections[0];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          currentSection = section;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'location', label: 'Location' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Enquire' },
  ];

  return (
    <div className="bg-brand-black min-h-screen pt-20">
      {/* Back Link */}
      <div className="fixed top-24 left-6 z-50">
        <Link href="/" className="group flex items-center gap-2 text-white/60 hover:text-brand-gold transition-colors bg-brand-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
          <LucideIcons.ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">All Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[85vh] overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`} />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="flex gap-4 mb-6">
              <span className="px-4 py-1.5 text-xs tracking-widest uppercase border border-brand-gold/30 text-brand-gold bg-brand-gold/10 backdrop-blur-sm">
                {project.status}
              </span>
              <span className="px-4 py-1.5 text-xs tracking-widest uppercase border border-white/30 text-white/80 bg-white/10 backdrop-blur-sm">
                {project.type}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight">
              {project.name.replace('Prestige ', '')}
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-white/80">
              <div className="flex items-center gap-3">
                <LucideIcons.MapPin className="w-5 h-5 text-brand-gold" />
                <span className="text-lg">{project.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <LucideIcons.Wallet className="w-5 h-5 text-brand-gold" />
                <span className="text-lg">{project.priceRange}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Nav */}
      <div
        ref={navRef}
        className="sticky top-0 z-40 w-full bg-brand-black/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="flex overflow-x-auto hide-scrollbar px-6 md:px-12 lg:px-24">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                const el = document.getElementById(link.id);
                if (el) {
                  window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                }
              }}
              className={`whitespace-nowrap px-6 py-4 text-sm tracking-wider uppercase transition-colors relative ${
                activeSection === link.id ? 'text-brand-gold' : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 space-y-32">
        {/* Overview */}
        <section id="overview" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div>
              <h2 className="font-display text-4xl text-white mb-8">The Vision</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l border-brand-gold/30 pl-4">
                  <div className="text-white/40 text-sm tracking-wider uppercase mb-1">Configuration</div>
                  <div className="text-white font-medium text-xl">{project.config}</div>
                </div>
                <div className="border-l border-brand-gold/30 pl-4">
                  <div className="text-white/40 text-sm tracking-wider uppercase mb-1">Super Area</div>
                  <div className="text-white font-medium text-xl">{project.area}</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-auto border border-white/10 p-4">
              <div className="relative w-full h-full">
                <Image src={project.image} alt={project.name} fill className="object-cover opacity-60" />
                <div className="absolute inset-0 bg-brand-gold/5 mix-blend-overlay" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="scroll-mt-32">
          <h2 className="font-display text-4xl text-white mb-12 text-center">Curated Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.amenities.map((amenity, i) => (
              <motion.div
                key={amenity}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/5 p-8 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-brand-gold/20 rounded-full" />
                </div>
                <span className="text-white/80 text-sm tracking-wider uppercase">{amenity}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact / Enquire */}
        <section id="contact" className="scroll-mt-32">
          <div className="bg-white/5 border border-white/10 p-8 md:p-16 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full" />

            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="font-display text-4xl text-white mb-6">Register Your Interest</h2>
                <p className="text-white/60 mb-8">
                  Connect with our luxury property advisors for a private presentation of {project.name}.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white/80">
                    <LucideIcons.Phone className="w-5 h-5 text-brand-gold" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <LucideIcons.Mail className="w-5 h-5 text-brand-gold" />
                    <span>sales@prestigelandmarks.com</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">First Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Last Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Email Address</label>
                  <input required type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Phone Number</label>
                  <input required type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <button
                  type="submit"
                  disabled={formState !== 'idle'}
                  className="w-full py-4 bg-brand-gold text-brand-black font-bold tracking-widest uppercase hover:bg-brand-gold-light transition-colors flex items-center justify-center gap-2"
                >
                  {formState === 'loading' ? (
                    <LucideIcons.Loader2 className="w-5 h-5 animate-spin" />
                  ) : formState === 'success' ? (
                    <>
                      <LucideIcons.CheckCircle className="w-5 h-5" />
                      Received
                    </>
                  ) : (
                    'Request Callback'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
