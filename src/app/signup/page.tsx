'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SignupCard } from '@/components/features/SignupCard';
import { SwingLogo } from '@/components/ui/SwingLogo';
import Footer from '@/components/layout/Footer';
import { Starfield } from '@/components/ui/Starfield';

export default function SignupPage() {
  return (
    <>
      <Starfield />
      <main className="relative min-h-screen z-10">
        {/* Hero Section with Signup Form */}
        <section className="relative flex min-h-screen lg:min-h-0 items-center justify-center overflow-hidden">
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16 xl:px-20 xl:py-12 2xl:px-24 2xl:py-16">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-32 items-center">
              {/* Left Column - Brand Messaging */}
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

                {/* Main heading */}
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

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-base sm:text-lg text-muted-foreground max-w-none lg:max-w-lg mx-auto lg:mx-0"
                >
                  Join the world&apos;s largest alternative lifestyle dating community.
                  Create connections, fulfill fantasies, and celebrate the lifestyle in a safe, welcoming space.
                </motion.p>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>100% Free to Join</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span>Safe & Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <span>Verified Members</span>
                  </div>
                </motion.div>

                {/* Additional info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="pt-4"
                >
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-primary">25+ Years Serving Our Community</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Signup Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center sm:justify-center md:justify-center lg:justify-end"
              >
                <SignupCard />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-12 md:py-14 lg:py-16 xl:py-12 2xl:py-16">
          <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Join <span className="text-black">Swing</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the most trusted platform for alternative lifestyle connections
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-xl border border-primary/40 bg-primary/10 p-6"
              >
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm font-semibold text-foreground mb-2">Years of Experience</div>
                <div className="text-sm text-muted-foreground">
                  Trusted by millions since 1999. Formerly <a href="https://sls.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors">SLS.com</a> and <a href="https://swinglifestyle.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary/80 transition-colors">Swinglifestyle.com</a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl border border-accent/40 bg-accent/10 p-6"
              >
                <div className="text-3xl font-bold text-accent mb-2">#1</div>
                <div className="text-sm font-semibold text-foreground mb-2">Largest Community</div>
                <div className="text-sm text-muted-foreground">
                  The world&apos;s largest swingers website with millions of active members
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-xl border border-secondary/40 bg-secondary/10 p-6"
              >
                <div className="text-3xl font-bold text-secondary mb-2">∞</div>
                <div className="text-sm font-semibold text-foreground mb-2">Endless Possibilities</div>
                <div className="text-sm text-muted-foreground">
                  Connect with like-minded individuals in a safe, judgment-free environment
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
