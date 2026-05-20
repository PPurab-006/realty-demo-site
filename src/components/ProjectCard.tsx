'use client';

import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';

import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    setRotateX(-y * 8);
    setRotateY(x * 8);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  }, []);

  const statusColors: Record<string, string> = {
    'Under Construction': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    'Ready to Move': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'Coming Soon': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  };

  // Simple solid color blur placeholder
  const blurDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO88OjRfwwAJMgM1D7yYjIAAAAASUVORK5CYII=";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-[85vw] sm:w-[420px] md:w-[480px] h-[560px] md:h-[620px] relative group"
      style={{
        perspective: '1000px',
      }}
      data-hoverable
    >
      <div
        className="relative w-full h-full overflow-hidden transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Project Image */}
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataUrl}
          sizes="(max-width: 768px) 85vw, 480px"
        />
        
        {/* Architectural pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 30px,
            rgba(201,168,76,0.1) 30px,
            rgba(201,168,76,0.1) 31px
          )`,
        }} />

        {/* Shimmer effect on hover */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: 'translateX(-100%) skewX(-15deg)', animation: isHovered ? 'shimmer 1.5s ease-in-out' : 'none' }}
        />

        {/* Bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className={`px-4 py-1.5 text-xs tracking-widest uppercase border ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>

        {/* Project type badge */}
        <div className="absolute top-6 right-6 z-10">
          <span className="text-white/40 text-xs tracking-wider uppercase">
            {project.type}
          </span>
        </div>

        {/* Content - always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <h3 className="font-display text-2xl md:text-3xl text-white font-bold mb-2 leading-tight">
            {project.name}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-3.5 h-3.5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-white/50 text-sm">{project.location}</span>
          </div>
          <p className="text-brand-gold font-display text-xl font-semibold mb-4">
            {project.priceRange}
          </p>

          {/* Hover overlay with details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 pt-4"
          >
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <span className="text-white/30 text-xs tracking-wider uppercase block mb-1">Config</span>
                <span className="text-white text-sm">{project.config}</span>
              </div>
              <div>
                <span className="text-white/30 text-xs tracking-wider uppercase block mb-1">Area</span>
                <span className="text-white text-sm">{project.area}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 text-xs"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gold border on hover */}
        <div className={`absolute inset-0 border transition-all duration-500 ${isHovered ? 'border-brand-gold/30' : 'border-white/5'}`} />
      </div>
    </motion.div>
  );
}
