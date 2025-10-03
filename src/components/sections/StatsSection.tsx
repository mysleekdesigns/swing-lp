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
    <section className="relative py-16 px-6 sm:px-8 lg:px-12">
      {/* Content */}
      <div className="relative max-w-7xl lg:max-w-[80vw] mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
