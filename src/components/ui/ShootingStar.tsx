'use client';

import { useState, useEffect, useMemo } from 'react';
import { useReducedMotion } from '@/lib/animations';

export function ShootingStars() {
  const prefersReducedMotion = useReducedMotion();
  const [currentStar, setCurrentStar] = useState(0);

  // Generate random properties for the current shooting star
  const config = useMemo(() => {
    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    // Duration between 7-15 seconds
    const durationMs = random(7000, 15000);

    // Calculate distance based on duration (longer = farther)
    // 7s = 400px, 15s = 1200px (linear scaling)
    const minDuration = 7000;
    const maxDuration = 15000;
    const minDistance = 400;
    const maxDistance = 1200;
    const distance = minDistance + ((durationMs - minDuration) / (maxDuration - minDuration)) * (maxDistance - minDistance);

    return {
      top: `${random(-20, 80)}%`,
      left: `${random(-10, 60)}%`,
      duration: `${durationMs}ms`,
      distance: `${distance}px`,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStar]); // Regenerate when currentStar changes

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Parse duration to get the animation length
    const duration = parseFloat(config.duration);

    // Wait for animation to complete, then show next star after a gap
    const timer = setTimeout(() => {
      setCurrentStar(prev => prev + 1);
    }, duration + 2000); // Add 2 second gap between stars

    return () => clearTimeout(timer);
  }, [currentStar, config.duration, prefersReducedMotion]);

  // Don't show shooting stars if user prefers reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="shooting-stars-container">
      <div
        key={currentStar} // Force re-render with new animation
        className="shooting-star"
        style={{
          top: config.top,
          left: config.left,
          '--star-duration': config.duration,
          '--star-distance': config.distance,
        } as React.CSSProperties}
      >
        <div className="shooting-star-glow shooting-star-glow-1" />
        <div className="shooting-star-glow shooting-star-glow-2" />
      </div>
    </div>
  );
}
