'use client';

export function Starfield() {
  return (
    <div className="starfield-container">
      {/* Small stars */}
      <div className="stars stars-small"></div>
      {/* Medium stars */}
      <div className="stars stars-medium"></div>
      {/* Large stars */}
      <div className="stars stars-large"></div>
      {/* Gradient fade overlay */}
      <div className="starfield-fade"></div>
    </div>
  );
}
