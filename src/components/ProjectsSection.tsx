'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    const scrollWidth = section.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(section, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="relative bg-brand-black">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
            Signature Projects
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <div ref={triggerRef} className="overflow-hidden">
        <div
          ref={sectionRef}
          className="flex gap-8 pl-8 pr-[40vw] py-8"
          style={{ width: 'fit-content' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
