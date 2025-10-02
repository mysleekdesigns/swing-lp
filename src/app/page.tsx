'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { BrandStorySection } from '@/components/sections/BrandStorySection';
import CTASection from '@/components/sections/CTASection';
import { LoginCard } from '@/components/features/LoginCard';
import FloatingParticles from '@/components/ui/FloatingParticles';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <FloatingParticles />

      <main className="relative min-h-screen">
        <HeroSection />

        {/* Login + Stats Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Login Card */}
              <div className="flex justify-center lg:justify-end">
                <LoginCard />
              </div>

              {/* Stats */}
              <div className="flex items-center">
                <div className="w-full">
                  <StatsSection />
                </div>
              </div>
            </div>
          </div>
        </section>

        <BrandStorySection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
