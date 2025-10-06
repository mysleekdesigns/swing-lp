'use client';

import { Variants, Transition } from 'framer-motion';
import { springs, easings, stagger } from '@/lib/animations';

/**
 * Fade in from bottom animation
 * Perfect for hero sections and main content
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springs.default,
      opacity: {
        duration: 0.4,
        ease: easings.easeOut,
      },
    },
  },
};

/**
 * Fade in from top animation
 */
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springs.default,
      opacity: {
        duration: 0.4,
        ease: easings.easeOut,
      },
    },
  },
};

/**
 * Scale and fade in animation
 * Great for cards, modals, and featured elements
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...springs.gentle,
      opacity: {
        duration: 0.3,
        ease: easings.easeOut,
      },
    },
  },
};

/**
 * Scale in with bounce
 * More playful variant for attention-grabbing elements
 */
export const scaleInBounce: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...springs.bouncy,
      opacity: {
        duration: 0.3,
        ease: easings.easeOut,
      },
    },
  },
};

/**
 * Container for staggered children animations
 * Use with any child variants for sequential reveals
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: stagger.normal,
    },
  },
};

/**
 * Fast stagger container for quick sequences
 */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: stagger.fast,
    },
  },
};

/**
 * Slow stagger container for dramatic reveals
 */
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: stagger.slow,
    },
  },
};

/**
 * Slide in from left
 * Great for sidebar content and feature cards
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...springs.default,
      opacity: {
        duration: 0.4,
        ease: easings.easeOut,
      },
    },
  },
};

/**
 * Slide in from right
 * Perfect for image reveals and alternating content
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...springs.default,
      opacity: {
        duration: 0.4,
        ease: easings.easeOut,
      },
    },
  },
};

/**
 * Pulse glow animation
 * Continuous subtle pulse for CTAs and important elements
 */
export const pulseGlow: Variants = {
  initial: {
    boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.7)',
  },
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(59, 130, 246, 0.7)',
      '0 0 0 10px rgba(59, 130, 246, 0)',
      '0 0 0 0 rgba(59, 130, 246, 0)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easings.easeOut as any,
    },
  },
};

/**
 * Hover lift effect
 * Subtle lift on hover for interactive elements
 */
export const hoverLift = {
  rest: {
    y: 0,
    scale: 1,
    transition: {
      ...springs.default,
    },
  },
  hover: {
    y: -4,
    scale: 1.02,
    transition: {
      ...springs.snappy,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      ...springs.snappy,
    },
  },
};

/**
 * Hover scale effect
 * Simple scale on hover
 */
export const hoverScale = {
  rest: {
    scale: 1,
    transition: {
      ...springs.default,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      ...springs.snappy,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      ...springs.snappy,
    },
  },
};

/**
 * Rotate in animation
 * Dramatic entrance for special elements
 */
export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -10,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      ...springs.gentle,
      opacity: {
        duration: 0.3,
        ease: easings.easeOut,
      },
    },
  },
};

/**
 * Blur fade in
 * Modern, sophisticated entrance
 */
export const blurFadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
};

/**
 * Expand animation
 * Great for accordions and expanding sections
 */
export const expand: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.3,
        ease: easings.easeInOut,
      },
      opacity: {
        duration: 0.2,
        ease: easings.easeOut,
      },
    },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: {
        duration: 0.3,
        ease: easings.easeInOut,
      },
      opacity: {
        duration: 0.3,
        delay: 0.1,
        ease: easings.easeOut,
      },
    },
  },
};

/**
 * Typewriter cursor blink
 * For text animations
 */
export const cursorBlink: Variants = {
  animate: {
    opacity: [1, 1, 0, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

/**
 * Float animation
 * Gentle floating motion for background elements
 */
export const float: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: easings.easeInOut as any,
    },
  },
};

/**
 * Shimmer effect
 * Loading skeleton or highlight effect
 */
export const shimmer: Variants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

/**
 * Draw line animation
 * For SVG path animations
 */
export const drawLine: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 2,
        ease: easings.easeInOut,
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
};

/**
 * Nav item animation
 * For navigation menu items
 */
export const navItem: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      ...springs.default,
    },
  }),
};

/**
 * Card hover with glow
 * Premium card interaction
 */
export const cardHoverGlow = {
  rest: {
    scale: 1,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: {
      ...springs.default,
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
    transition: {
      ...springs.snappy,
    },
  },
};

/**
 * Magnetic hover effect
 * Interactive magnetic pull effect
 */
export function createMagneticVariant(strength: number = 0.3) {
  return {
    rest: {
      x: 0,
      y: 0,
    },
    hover: (position: { x: number; y: number }) => ({
      x: position.x * strength,
      y: position.y * strength,
      transition: {
        ...springs.soft,
      },
    }),
  };
}

/**
 * Page transition variants
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easings.easeIn,
    },
  },
};

/**
 * Modal variants
 */
export const modalOverlay: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: easings.easeIn,
    },
  },
};

export const modalContent: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ...springs.default,
      opacity: {
        duration: 0.2,
      },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: {
      duration: 0.2,
      ease: easings.easeIn,
    },
  },
};

/**
 * Counter animation variant
 * For animated numbers
 */
export const counterVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springs.default,
    },
  },
};
