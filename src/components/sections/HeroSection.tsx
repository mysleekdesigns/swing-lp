'use client';

import { motion } from 'framer-motion';
import { LoginCard } from '@/components/features/LoginCard';
import { SwingLogo } from '@/components/ui/SwingLogo';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen lg:min-h-0 items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16 xl:px-20 xl:py-12 2xl:px-24 2xl:py-16">
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
              <SwingLogo className="w-36 h-auto sm:w-44" />
            </motion.div>

            {/* Main heading - simpler, more direct */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Where Desire Finds Its Exquisite New Home
              </span>
            </motion.h1>

            {/* Subtitle - concise and punchy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-lg"
            >
              Swinglifestyle.com has served members for nearly 25 years. Now transitioning to Swing.com — the largest swingers website — to ignite connections and fulfill fantasies.
            </motion.p>

            {/* Trust badges - cleaner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>25+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                <span>Verified Members</span>
              </div>
            </motion.div>
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
