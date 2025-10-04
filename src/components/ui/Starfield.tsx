'use client';

import { useParallax } from '@/lib/animations';

export function Starfield() {
  // Different parallax speeds for depth layers (slowest to fastest)
  const microStarsOffset = useParallax(0.05);   // Micro stars - deepest background (milky way effect)
  const smallStarsOffset = useParallax(0.1);    // Small stars - far background
  const mediumStarsOffset = useParallax(0.3);   // Medium stars - mid-layer
  const largeStarsOffset = useParallax(0.5);    // Large stars - foreground
  const xlStarsOffset = useParallax(0.7);       // XL stars - extreme foreground

  return (
    <div className="starfield-container">
      {/* Micro stars - deepest layer (milky way haze) */}
      <div
        className="stars stars-micro"
        style={{ transform: `translateY(${microStarsOffset}px)` }}
      ></div>
      {/* Small stars - far background */}
      <div
        className="stars stars-small"
        style={{ transform: `translateY(${smallStarsOffset}px)` }}
      ></div>
      {/* Medium stars - mid-layer */}
      <div
        className="stars stars-medium"
        style={{ transform: `translateY(${mediumStarsOffset}px)` }}
      ></div>
      {/* Large stars - foreground */}
      <div
        className="stars stars-large"
        style={{ transform: `translateY(${largeStarsOffset}px)` }}
      ></div>
      {/* XL stars - extreme foreground */}
      <div
        className="stars stars-xl"
        style={{ transform: `translateY(${xlStarsOffset}px)` }}
      ></div>
      {/* Gradient fade overlay */}
      <div className="starfield-fade"></div>
    </div>
  );
}
