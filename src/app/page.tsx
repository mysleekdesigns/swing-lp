'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { BrandStorySection } from '@/components/sections/BrandStorySection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';
import { Starfield } from '@/components/ui/Starfield';

export default function Home() {
  return (
    <>
      <Starfield />
      <main className="relative min-h-screen z-10 pt-16 md:pt-20">
        <HeroSection />
        <StatsSection />
        <BrandStorySection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
