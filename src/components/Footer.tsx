'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const quickLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About Us', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'Instagram', icon: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm2 12a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v8zm-6-7a3 3 0 100 6 3 3 0 000-6zm4.5-.5a1 1 0 110-2 1 1 0 010 2z' },
    { name: 'Twitter', icon: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z' },
  ];

  return (
    <footer className="relative bg-brand-black border-t border-white/5">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-brand-gold flex items-center justify-center rotate-45">
                <span className="text-brand-gold font-display text-sm font-bold -rotate-45">PL</span>
              </div>
              <div>
                <span className="text-white font-display text-lg tracking-wide">Prestige</span>
                <span className="text-brand-gold font-display text-lg tracking-wide ml-1">Landmarks</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Crafting architectural masterpieces across Rajasthan since 1998. Where legacy meets modern luxury.
            </p>
            <p className="text-white/30 text-xs">
              RERA No: RAJ/RERA/2024/000123
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-brand-gold font-display text-sm tracking-widest uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-brand-gold text-sm transition-colors duration-300"
                    data-hoverable
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-brand-gold font-display text-sm tracking-widest uppercase mb-6">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              <p className="text-white/50 text-sm">C-Scheme, Jaipur, Rajasthan 302001</p>
              <p className="text-white/50 text-sm">+91 98765 43210</p>
              <p className="text-white/50 text-sm">info@prestigelandmarks.in</p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-brand-gold hover:bg-brand-gold/10 transition-all duration-300"
                  data-hoverable
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/30 text-xs">
            © 2024 Prestige Landmarks. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors" data-hoverable>
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors" data-hoverable>
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
