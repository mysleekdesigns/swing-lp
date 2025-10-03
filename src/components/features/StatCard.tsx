import { motion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';

interface StatCardProps {
  label: string;
  value: number;
  index: number;
}

export function StatCard({ label, value, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500" />

      {/* Glass morphism card */}
      <div className="relative h-full bg-card/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-8 border border-border shadow-xl">
        {/* Value */}
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          <AnimatedCounter value={value} duration={2.5} />
        </div>

        {/* Label */}
        <div className="text-muted-foreground text-base sm:text-lg font-medium leading-tight">
          {label}
        </div>

        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
