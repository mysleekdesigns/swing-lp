import Image from 'next/image';

interface SwingLogoProps {
  className?: string;
}

export function SwingLogo({ className = "" }: SwingLogoProps) {
  return (
    <Image
      src="/logo-swing.svg"
      alt="Swing Logo"
      width={200}
      height={60}
      className={className}
      priority
    />
  );
}
