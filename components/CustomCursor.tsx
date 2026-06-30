'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * A minimal premium cursor: a small dot that follows instantly and a
 * lagging ring that eases behind it, with magnetic scale-up on hoverables.
 */
export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { damping: 25, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(cursorY, { damping: 25, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supportsHover) return;
    setIsVisible(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest('a, button, [data-cursor]'));
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-primary"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-primary/40"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isPointer ? 56 : 28,
          height: isPointer ? 56 : 28,
          opacity: isPointer ? 0.6 : 0.3,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
    </>
  );
}
