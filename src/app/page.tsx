'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { BrandStorySection } from '@/components/sections/BrandStorySection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen">
        <HeroSection />
        <StatsSection />
        <BrandStorySection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
