'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import * as LucideIcons from 'lucide-react';

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
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
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleEnquire = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="bg-brand-black min-h-screen">
      {/* Back to all projects */}
      <motion.div
        style={{ opacity: useTransform(heroScroll, [0, 0.1], [0, 1]) }}
        className="fixed top-6 left-6 lg:top-8 lg:left-8 z-[60] pointer-events-auto"
      >
        <Link href="/#projects" className="flex items-center gap-2 text-white/50 hover:text-brand-gold transition-colors text-sm font-medium" data-hoverable>
          <LucideIcons.ArrowLeft className="w-4 h-4" />
          <span>All Projects</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs tracking-widest uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              {project.status}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            >
              {project.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-white/60 text-lg md:text-xl uppercase tracking-widest mb-10"
            >
              {project.location}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="px-8 py-3.5 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-black font-semibold text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all min-w-[200px]"
                data-hoverable
              >
                Enquire Now
              </a>
              <a
                href="#"
                className="px-8 py-3.5 border border-white/20 text-white font-semibold text-sm tracking-widest uppercase hover:border-brand-gold hover:bg-brand-gold/10 transition-all min-w-[200px] flex items-center justify-center gap-2"
                data-hoverable
              >
                <LucideIcons.Download className="w-4 h-4" />
                Brochure
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div ref={navRef} className="sticky top-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto hide-scrollbar">
          <ul className="flex items-center gap-8 py-4 whitespace-nowrap text-sm tracking-widest uppercase font-medium">
            {['overview', 'amenities', 'location', 'gallery', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleNavClick(e, section)}
                  className={`${activeSection === section ? 'text-brand-gold' : 'text-white/50 hover:text-white'} transition-colors relative block py-1`}
                  data-hoverable
                >
                  {section}
                  {activeSection === section && (
                    <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-32">
        {/* Overview Section */}
        <section id="overview" className="scroll-mt-24 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="font-display text-4xl text-white font-bold mb-6">About the Project</h2>
              <div className="w-12 h-0.5 bg-brand-gold mb-8" />
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                {project.fullDescription || project.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {project.stats && Object.entries(project.stats).map(([key, value]) => {
                  if (!value) return null;
                  const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                  return (
                    <div key={key} className="p-4 border border-white/10 bg-white/[0.02]">
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{label}</p>
                      <p className="text-brand-gold font-display text-lg font-medium">{value}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative aspect-square lg:aspect-[4/5]"
            >
               <Image
                src={project.image}
                alt={`${project.name} Overview`}
                fill
                className="object-cover border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="scroll-mt-24 pt-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true, margin: '-100px' }}
             className="text-center mb-16"
          >
            <h2 className="font-display text-4xl text-white font-bold mb-6">Premium Amenities</h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.detailedAmenities?.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="bg-white/[0.02] border border-white/5 p-6"
              >
                <h3 className="text-brand-gold text-sm tracking-widest uppercase mb-6">{category.category}</h3>
                <ul className="space-y-4">
                  {category.list.map((amenity) => {
                     // Provide fallback icon if the specified one doesn't exist
                     const IconComponent = (LucideIcons as unknown as Record<string, React.ElementType>)[amenity.icon] || LucideIcons.CheckCircle;
                     return (
                        <li key={amenity.name} className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-white/40" />
                          <span className="text-white/80 text-sm">{amenity.name}</span>
                        </li>
                     )
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="scroll-mt-24 pt-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                 <h2 className="font-display text-4xl text-white font-bold mb-6">Connectivity & Location</h2>
                 <div className="w-12 h-0.5 bg-brand-gold mb-10" />

                 <div className="space-y-4">
                    {project.locationHighlights?.map((highlight, i) => (
                      <motion.div
                        key={highlight.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="flex items-center justify-between p-4 border border-white/10 bg-white/[0.02]"
                      >
                         <span className="text-white/80">{highlight.name}</span>
                         <span className="text-brand-gold font-medium">{highlight.distance}</span>
                      </motion.div>
                    ))}
                 </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
                className="relative aspect-video lg:aspect-square bg-zinc-900 border border-brand-gold/30 p-2 flex items-center justify-center"
              >
                {/* Map Placeholder */}
                <div className="absolute inset-0 border border-brand-gold/10 m-2 flex items-center justify-center bg-zinc-950/50">
                  <div className="text-center">
                    <LucideIcons.MapPin className="w-12 h-12 text-brand-gold mx-auto mb-4 opacity-50" />
                    <p className="text-white/30 text-sm tracking-widest uppercase">Interactive Map view</p>
                  </div>
                </div>
              </motion.div>
           </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="scroll-mt-24 pt-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true, margin: '-100px' }}
             className="text-center mb-16"
          >
            <h2 className="font-display text-4xl text-white font-bold mb-6">Gallery</h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
             {project.images?.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="relative aspect-square cursor-pointer group overflow-hidden"
                  onClick={() => {
                    setLightboxIndex(i);
                    setLightboxOpen(true);
                  }}
                  data-hoverable
                >
                  <Image src={img} alt={`${project.name} gallery ${i}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <LucideIcons.ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
             ))}
          </div>
        </section>

        {/* Contact/Enquire Section */}
        <section id="contact" className="scroll-mt-24 pt-10 pb-20">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true, margin: '-100px' }}
             className="max-w-2xl mx-auto bg-white/[0.03] border border-white/10 p-8 md:p-12 relative"
          >
             <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-gold/40" />
             <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-gold/40" />

             <h2 className="font-display text-3xl text-white font-bold mb-2">Interested in {project.name}?</h2>
             <p className="text-white/40 mb-8 text-sm">Leave your details and our property expert will get back to you.</p>

             <form onSubmit={handleEnquire} className="space-y-4">
                <input type="text" placeholder="Name" required className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors" />
                <input type="tel" placeholder="Phone Number" required className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors" />
                <input type="text" value={project.name} readOnly className="w-full bg-transparent border-b border-white/20 pb-2 text-white/50 focus:outline-none" />
                <textarea placeholder="Message" rows={3} className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors resize-none mt-4" />

                <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center">
                  <button
                    type="submit"
                    disabled={formState !== 'idle'}
                    className="w-full sm:w-auto flex-1 py-3 bg-brand-gold text-brand-black font-semibold text-sm tracking-widest uppercase hover:bg-brand-gold-light transition-colors disabled:opacity-70"
                    data-hoverable
                  >
                    {formState === 'idle' && 'Submit Enquiry'}
                    {formState === 'loading' && 'Submitting...'}
                    {formState === 'success' && 'Enquiry Sent'}
                  </button>
                  <a href={`https://wa.me/919876543210?text=I'm interested in ${project.name}`} target="_blank" rel="noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 transition-colors text-sm font-semibold tracking-widest uppercase" data-hoverable>
                     <LucideIcons.MessageCircle className="w-4 h-4" />
                     WhatsApp
                  </a>
                </div>
             </form>
          </motion.div>
        </section>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && project.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-black/95 flex items-center justify-center backdrop-blur-sm"
          >
            <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 text-white/50 hover:text-white" data-hoverable>
               <LucideIcons.X className="w-8 h-8" />
            </button>
            <button
               onClick={() => setLightboxIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length)}
               className="absolute left-6 text-white/50 hover:text-white"
               data-hoverable
            >
               <LucideIcons.ChevronLeft className="w-12 h-12" />
            </button>

            <motion.div
               key={lightboxIndex}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.1 }}
               className="relative w-full max-w-5xl aspect-video px-16"
            >
               <Image src={project.images[lightboxIndex]} alt="Gallery Preview" fill className="object-contain" />
            </motion.div>

            <button
               onClick={() => setLightboxIndex((prev) => (prev + 1) % project.images!.length)}
               className="absolute right-6 text-white/50 hover:text-white"
               data-hoverable
            >
               <LucideIcons.ChevronRight className="w-12 h-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
