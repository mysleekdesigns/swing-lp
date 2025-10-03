'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { BrandStorySection } from '@/components/sections/BrandStorySection';
import CTASection from '@/components/sections/CTASection';
import FloatingParticles from '@/components/ui/FloatingParticles';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <FloatingParticles />

      <main className="relative min-h-screen">
        <HeroSection />

        {/* Stats Section */}
        <section className="relative py-12 px-4 sm:py-16 md:py-20 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <StatsSection />
          </div>
        </section>

        <BrandStorySection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
