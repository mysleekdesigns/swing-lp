'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Hook to detect user's motion preferences
 * Returns true if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook for animated counter with easing
 * @param end - Target number
 * @param duration - Animation duration in ms (default: 2000)
 * @param start - Starting number (default: 0)
 * @param delay - Delay before starting (default: 0)
 */
export function useCountUp(
  end: number,
  duration: number = 2000,
  start: number = 0,
  delay: number = 0
) {
  const [count, setCount] = useState(start);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!isStarted) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;
    const range = end - start;

    const timer = setInterval(() => {
      const now = Date.now();

      if (now < startTime) return;

      if (now >= endTime) {
        setCount(end);
        clearInterval(timer);
        return;
      }

      const progress = (now - startTime) / duration;
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + range * eased;

      setCount(Math.floor(current));
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [end, duration, start, delay, isStarted]);

  return { count, start: () => setIsStarted(true) };
}

/**
 * Hook for scroll-triggered animations
 * @param options - Intersection observer options
 * @param once - Trigger animation only once (default: true)
 */
export function useScrollAnimation(
  options?: any,
  once: boolean = true
) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: 0.3,
    ...options,
  });

  return { ref, isInView };
}

/**
 * Hook for parallax scroll effect
 * @param speed - Parallax speed multiplier (default: 0.5)
 */
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
}

/**
 * Hook for mouse position tracking
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}

/**
 * Utility to create responsive animation values
 */
export function responsive<T>(
  mobile: T,
  tablet: T,
  desktop: T
): T {
  if (typeof window === 'undefined') return desktop;

  const width = window.innerWidth;
  if (width < 768) return mobile;
  if (width < 1024) return tablet;
  return desktop;
}

/**
 * Animation timing presets
 */
export const timings = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
} as const;

/**
 * Spring physics presets
 */
export const springs = {
  // Soft, bouncy spring
  soft: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 15,
    mass: 1,
  },
  // Balanced spring for most use cases
  default: {
    type: 'spring' as const,
    stiffness: 260,
    damping: 20,
    mass: 1,
  },
  // Snappy, responsive spring
  snappy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 30,
    mass: 0.8,
  },
  // Gentle, smooth spring
  gentle: {
    type: 'spring' as const,
    stiffness: 120,
    damping: 14,
    mass: 1,
  },
  // Bouncy spring for playful animations
  bouncy: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 10,
    mass: 1,
  },
} as const;

/**
 * Easing curves
 */
export const easings = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  sharp: [0.4, 0, 0.6, 1],
  smooth: [0.25, 0.1, 0.25, 1],
} as const;

/**
 * Stagger timing utilities
 */
export const stagger = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
} as const;

/**
 * Create a stagger animation config
 */
export function createStagger(
  delayChildren: number = 0,
  staggerChildren: number = stagger.normal
) {
  return {
    delayChildren,
    staggerChildren,
  };
}

/**
 * Viewport animation config for scroll-triggered animations
 */
export const viewportConfig = {
  once: true,
  amount: 0.3,
} as const;

/**
 * Create a scroll-triggered variant
 */
export function scrollVariant<T extends Record<string, any>>(
  hidden: T,
  visible: T
) {
  return {
    hidden,
    visible,
  };
}
