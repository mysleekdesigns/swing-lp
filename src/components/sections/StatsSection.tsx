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
    <section className="relative py-12 md:py-14 lg:py-16 xl:py-12 2xl:py-16">
      {/* Content */}
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
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
