'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircledIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';

export default function CTASection() {
  return (
    <section className="relative py-12 md:py-10 lg:py-12 xl:py-12 2xl:py-16 overflow-hidden">
      {/* Content Container */}
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid gap-16 md:gap-12 lg:grid-cols-2 lg:gap-24 xl:gap-32 2xl:gap-40">
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
                <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
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
                  className="px-6 py-3 rounded-full text-base font-semibold text-primary-foreground bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
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
                className="px-6 py-3 rounded-full text-base font-semibold text-foreground border-2 border-border hover:border-primary/50 transition-colors cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Find Out More
              </motion.button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircledIcon className="w-5 h-5 text-primary" />
                <span>100% Free to Join</span>
              </div>
              <div className="flex items-center gap-2">
                <LockClosedIcon className="w-5 h-5 text-accent" />
                <span>Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <PersonIcon className="w-5 h-5 text-secondary" />
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
