'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  size: number;
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
  animateX: number[];
  animateY: number[];
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      'rgba(168, 85, 247, 0.4)', // purple-500
      'rgba(147, 51, 234, 0.4)', // purple-600
      'rgba(217, 70, 239, 0.4)', // magenta-500
      'rgba(192, 38, 211, 0.4)', // magenta-600
      'rgba(196, 181, 253, 0.3)', // purple-300
    ];

    setParticles(
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        size: Math.random() * 16 + 4, // 4px to 20px
        initialX: Math.random() * 100, // 0% to 100% of viewport width
        initialY: Math.random() * 100, // 0% to 100% of viewport height
        duration: Math.random() * 20 + 15, // 15s to 35s
        delay: Math.random() * 5, // 0s to 5s delay
        opacity: Math.random() * 0.4 + 0.2, // 0.2 to 0.6
        color: colors[Math.floor(Math.random() * colors.length)],
        animateX: [
          0,
          Math.random() * 100 - 50, // -50px to 50px
          Math.random() * 100 - 50,
          0,
        ],
        animateY: [
          0,
          Math.random() * 100 - 50, // -50px to 50px
          Math.random() * 100 - 50,
          0,
        ],
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            backgroundColor: particle.color,
            filter: 'blur(1px)',
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            x: particle.animateX,
            y: particle.animateY,
            opacity: [
              0,
              particle.opacity,
              particle.opacity * 0.7,
              particle.opacity,
              0,
            ],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
