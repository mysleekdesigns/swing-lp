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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
      className="group relative"
    >
      {/* Clean card */}
      <div className="relative h-full bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
        {/* Value */}
        <div className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">
          <AnimatedCounter value={value} duration={2} />
        </div>

        {/* Label */}
        <div className="text-muted-foreground text-sm font-medium">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
