'use client';

import { motion } from 'framer-motion';

const amenities = [
  {
    name: 'Swimming Pool',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17.5c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0M3 20.5c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0M6 12V4a1 1 0 011-1h2a1 1 0 011 1v8M14 12V6a1 1 0 011-1h2a1 1 0 011 1v6" />
      </svg>
    ),
  },
  {
    name: 'Clubhouse',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    ),
  },
  {
    name: '24/7 Security',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'Landscaped Gardens',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    name: 'Gymnasium',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h2v12H4zM18 6h2v12h-2zM6 8h2v8H6zM16 8h2v8h-2zM8 10h8v4H8z" />
      </svg>
    ),
  },
  {
    name: 'Kids Play Area',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Covered Parking',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l1.5-5A2 2 0 016.4 3h11.2a2 2 0 011.9 1.5L21 10M3 10h18M3 10v8a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-8M7 14h.01M17 14h.01" />
      </svg>
    ),
  },
  {
    name: 'Smart Home',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="relative bg-brand-black py-32 overflow-hidden">
      {/* Subtle radial gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4 block">
            World-Class Living
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Premium Amenities
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-6" />
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Every Prestige project comes equipped with amenities designed to elevate your everyday experience.
          </p>
        </motion.div>

        {/* Amenities grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {amenities.map((amenity) => (
            <motion.div
              key={amenity.name}
              variants={itemVariants}
              className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all duration-500 flex flex-col items-center text-center"
              data-hoverable
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-gold/0 group-hover:border-brand-gold/30 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-brand-gold/0 group-hover:border-brand-gold/30 transition-all duration-500" />

              <div className="text-white/40 group-hover:text-brand-gold transition-colors duration-500 mb-4">
                {amenity.icon}
              </div>
              <h3 className="text-white/70 group-hover:text-white text-sm tracking-wider uppercase transition-colors duration-500">
                {amenity.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
