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
      <div className="relative h-full bg-gradient-to-br from-accent/10 via-background/20 to-background/30 backdrop-blur-md rounded-xl p-6 border border-accent/30 hover:border-primary/30 transition-colors text-center shadow-[0_0_80px_-12px_rgba(0,0,0,0.5),0_8px_32px_-8px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.05)]">
        {/* Value */}
        <div className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            <AnimatedCounter value={value} duration={2} />
          </span>
        </div>

        {/* Label */}
        <div className="text-muted-foreground text-sm font-medium">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
