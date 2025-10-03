import { StatCard } from '../features/StatCard';

const stats = [
  {
    label: 'Members Online Now',
    value: 2547,
  },
  {
    label: 'New Members This Week',
    value: 1823,
  },
  {
    label: 'New Pictures This Week',
    value: 4392,
  },
  {
    label: 'SLS Member Groups',
    value: 3156,
  },
];

export function StatsSection() {
  return (
    <section className="relative py-12 px-4 sm:py-16 sm:px-6 md:py-20 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/20 to-background" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
