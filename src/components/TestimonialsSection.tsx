'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-brand-gold' : 'text-white/10'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[350px] md:w-[400px] p-8 bg-white/[0.02] border border-white/5 hover:border-brand-gold/20 transition-colors duration-500 mx-3">
      <div className="flex items-center gap-4 mb-6">
        {/* Avatar */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-brand-black font-semibold text-sm"
          style={{
            background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`,
          }}
        >
          {testimonial.initials}
        </div>
        <div>
          <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
          <p className="text-white/30 text-xs">{testimonial.project}</p>
        </div>
      </div>
      <StarRating rating={testimonial.rating} />
      <p className="text-white/50 text-sm leading-relaxed mt-4 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  // Duplicate testimonials for seamless loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative bg-brand-black py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4 block">
            What Our Clients Say
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Voices of Trust
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto" />
        </motion.div>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        {/* Gradient fades on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((testimonial, i) => (
            <TestimonialCard key={`${testimonial.id}-${i}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
