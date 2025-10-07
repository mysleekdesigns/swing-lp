'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative py-12 md:py-14 lg:py-16 xl:py-12 2xl:py-16 overflow-hidden">
      {/* Content Container */}
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid gap-16 md:gap-20 lg:grid-cols-2 lg:gap-24 xl:gap-32 2xl:gap-40">
          {/* Content - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Explore Your{' '}
                <span className="text-black">
                  Desires?
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground">
                Join the world&apos;s largest alternative lifestyle dating community. Ignite connections, fulfill fantasies, and experience desire in its exquisite new home.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              {/* Primary CTA */}
              <Link href="/signup">
                <motion.button
                  className="px-8 py-4 rounded-full text-lg font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Us For Free
                </motion.button>
              </Link>

              {/* Secondary CTA */}
              <motion.button
                onClick={() => {
                  document.getElementById('brand-story')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-full text-lg font-semibold text-foreground border-2 border-border hover:border-primary/50 transition-colors cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Find Out More
              </motion.button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>100% Free to Join</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>Active Community</span>
              </div>
            </div>
          </motion.div>

          {/* Image - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl">
              <Image
                src="/couple-intimate.jpg"
                alt="Intimate couple enjoying their lifestyle"
                width={600}
                height={800}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
