interface SwingLogoProps {
  className?: string;
}

export function SwingLogo({ className = "" }: SwingLogoProps) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="swing-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'rgb(168, 85, 247)', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: 'rgb(236, 72, 153)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(239, 68, 68)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* "Swing" text */}
      <text
        x="100"
        y="40"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="36"
        fontWeight="700"
        fill="url(#swing-gradient)"
        textAnchor="middle"
        letterSpacing="-0.02em"
      >
        Swing
      </text>

      {/* Decorative arc element above text */}
      <path
        d="M 60 15 Q 100 5, 140 15"
        stroke="url(#swing-gradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
