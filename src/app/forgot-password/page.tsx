'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ForgotPasswordCard } from '@/components/features/ForgotPasswordCard';
import { SwingLogo } from '@/components/ui/SwingLogo';
import Footer from '@/components/layout/Footer';
import { Starfield } from '@/components/ui/Starfield';

export default function ForgotPasswordPage() {
  return (
    <>
      <Starfield />
      <main className="relative min-h-screen z-10">
        {/* Hero Section with Forgot Password Form */}
        <section className="relative flex min-h-screen lg:min-h-0 items-center justify-center overflow-hidden">
          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="mx-auto max-w-[1600px] px-6 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16 xl:px-20 xl:py-12 2xl:px-24 2xl:py-16">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                {/* Left Column - Brand Messaging */}
                <div className="text-left space-y-6 lg:space-y-7 xl:space-y-8 md:pr-8 lg:pr-12">
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-start"
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
                    We&apos;ve Got You Covered
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-base sm:text-lg text-muted-foreground max-w-lg"
                >
                  Forgot your password? No problem. We&apos;ll help you get back to exploring your desires in just a few clicks.
                </motion.p>

                {/* Security badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-start gap-6 text-sm text-muted-foreground"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Secure Reset</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span>Quick Process</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <span>Privacy Protected</span>
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
                    <span className="text-sm font-medium text-primary">Your Account Security is Our Priority</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Forgot Password Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center md:justify-end"
              >
                <ForgotPasswordCard />
              </motion.div>
            </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
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
                Need More <span className="text-black">Help</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are some common solutions to access your account
              </p>
            </motion.div>

            {/* Help Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-xl border border-primary/40 bg-primary/10 p-6 shadow-sm"
              >
                <div className="text-3xl mb-3">🔐</div>
                <div className="text-sm font-semibold text-foreground mb-2">Check Your Spam</div>
                <div className="text-sm text-muted-foreground">
                  Sometimes password reset emails end up in spam or junk folders. Be sure to check there first.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl border border-accent/40 bg-accent/10 p-6 shadow-sm"
              >
                <div className="text-3xl mb-3">📧</div>
                <div className="text-sm font-semibold text-foreground mb-2">Verify Email Address</div>
                <div className="text-sm text-muted-foreground">
                  Make sure you&apos;re using the email address associated with your Swing account.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-xl border border-secondary/40 bg-secondary/10 p-6 shadow-sm"
              >
                <div className="text-3xl mb-3">💬</div>
                <div className="text-sm font-semibold text-foreground mb-2">Contact Support</div>
                <div className="text-sm text-muted-foreground">
                  Still having trouble? Our support team is here to help you get back in.
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
