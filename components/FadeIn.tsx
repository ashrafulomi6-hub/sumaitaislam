'use client';

import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  blur?: boolean;
};

/**
 * Shared reveal wrapper: fade up + optional blur-in, triggered once when
 * the element enters the viewport. This is the single repeated motion
 * primitive used across sections, so the page feels cohesive rather than
 * having a different animation style per block.
 */
export default function FadeIn({ children, delay = 0, className, y = 24, blur = true }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(6px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
