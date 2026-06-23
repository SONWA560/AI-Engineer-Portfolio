'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MinimalistHeroProps {
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  className?: string;
}

const MinimalistHero = ({
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div className={cn('relative w-full bg-background', className)}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-8 py-16 md:grid-cols-3 md:px-12 md:py-24">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font"
          >
            Read More
          </a>
        </motion.div>

        {/* Center Image */}
        <div className="order-1 flex items-center justify-center md:order-2">
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="w-72 h-72 rounded-full object-cover border-2 border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.15)] md:w-96 md:h-96"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found`;
            }}
          />
        </div>

        {/* Right Overlay Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="text-5xl font-extrabold text-foreground md:text-6xl lg:text-7xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export { MinimalistHero };
