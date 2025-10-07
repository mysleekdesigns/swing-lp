'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LoginCard } from '@/components/features/LoginCard';
import { SwingLogo } from '@/components/ui/SwingLogo';

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-8 md:px-12 md:py-10 lg:px-16 lg:py-16 xl:px-20 xl:py-20 2xl:px-24 2xl:py-24">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-32 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-7 xl:space-y-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <Link href="/">
                <SwingLogo className="w-36 h-auto sm:w-44" />
              </Link>
            </motion.div>

            {/* Main heading - simpler, more direct */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              <span className="text-black">
                Where Desire Finds Its Exquisite New Home
              </span>
            </motion.h1>

            {/* Subtitle - concise and punchy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-none lg:max-w-lg mx-auto lg:mx-0"
            >
              For nearly 25 years,{' '}
              <a href="https://swinglifestyle.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                Swinglifestyle.com
              </a>{' '}
              has been serving our members and we are proud to be the largest swingers website. We ignite connections and fulfill fantasies. Now, brace yourselves for a bold transformation as we unite under one electrifying destination:{' '}
              <a href="https://swing.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                Swing.com
              </a>
              . This is more than an evolution; it is a moment of exquisite anticipation, unveiling a fresh, unforgettable online experience designed to heighten every encounter.{' '}
              <a href="https://swing.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                Swing.com
              </a>{' '}
              is the best swingers website.
            </motion.p>
          </div>

          {/* Right Column - Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <LoginCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
