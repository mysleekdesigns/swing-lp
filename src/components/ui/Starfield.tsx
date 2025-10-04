'use client';

export function Starfield() {
  return (
    <div className="starfield-container">
      {/* Micro stars - deepest layer (milky way haze) */}
      <div className="stars stars-micro"></div>
      {/* Small stars - far background */}
      <div className="stars stars-small"></div>
      {/* Medium stars - mid-layer */}
      <div className="stars stars-medium"></div>
      {/* Large stars - foreground */}
      <div className="stars stars-large"></div>
      {/* XL stars - extreme foreground */}
      <div className="stars stars-xl"></div>
    </div>
  );
}
