'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

/* ─── Counter Component ─── */
function AnimatedCounter({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="flex items-baseline justify-center md:justify-start gap-1">
        <span className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-brand-gold tabular-nums">
          {count.toLocaleString()}
        </span>
        <span className="font-display text-3xl md:text-4xl text-brand-gold">{suffix}</span>
      </div>
      <p className="text-white/40 text-sm tracking-widest uppercase mt-2">{label}</p>
    </div>
  );
}

/* ─── About Section ─── */
export default function AboutSection() {
  return (
    <section id="about" className="relative bg-brand-black py-32 overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23C9A84C' stroke-width='0.5'/%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side - Sticky image placeholder */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              {/* Project Image */}
              <Image 
                src="/images/about_legacy.png"
                alt="Prestige Landmarks Legacy Architecture"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO88OjRfwwAJMgM1D7yYjIAAAAASUVORK5CYII="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />

              {/* Architectural lines overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(0deg, rgba(201,168,76,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201,168,76,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }} />

              {/* Corner accents */}
              <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-brand-gold/40" />
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-brand-gold/40" />

              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border border-brand-gold/20 rotate-45 flex items-center justify-center">
                  <div className="w-16 h-16 border border-brand-gold/30 rotate-0 flex items-center justify-center">
                    <span className="font-display text-brand-gold text-2xl font-bold -rotate-45">PL</span>
                  </div>
                </div>
              </div>

              {/* "Established" text */}
              <div className="absolute bottom-8 left-8">
                <span className="text-white/20 font-display text-sm tracking-[0.3em] uppercase">Est. 1998</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Scrolling content */}
          <div className="py-8 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4 block">
                Our Legacy
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-8 leading-tight">
                Building Dreams<br />
                <span className="text-brand-gold">Since 1998</span>
              </h2>
              <div className="w-16 h-0.5 bg-brand-gold mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 mb-16"
            >
              <p className="text-white/60 text-lg leading-relaxed">
                For over two decades, Prestige Landmarks has been the cornerstone of luxury real estate
                in Rajasthan. Our unwavering commitment to excellence, innovation, and integrity has
                earned us the trust of thousands of families.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Every project we undertake is a testament to our belief that architecture should
                inspire, spaces should transform, and homes should become legacies passed down
                through generations.
              </p>
              <p className="text-white/40 text-base leading-relaxed">
                From the rose-hued streets of Jaipur to the emerging corridors of Rajasthan&apos;s tier-2
                cities, our footprint continues to grow — but our promise remains the same:
                uncompromising quality, timeless design, and absolute trust.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              <AnimatedCounter target={25} suffix="+" label="Years of Excellence" />
              <AnimatedCounter target={150} suffix="+" label="Projects Delivered" />
              <AnimatedCounter target={10000} suffix="+" label="Happy Families" />
              <AnimatedCounter target={12} label="Cities" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
