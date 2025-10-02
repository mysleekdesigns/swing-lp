'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/components/animations/variants';
import { useScrollAnimation } from '@/lib/animations';

export function BrandStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: contentRef, isInView } = useScrollAnimation({ amount: 0.2 });

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-background via-card to-background py-24 sm:py-32 lg:py-40"
    >
      {/* Decorative floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle - top right */}
        <motion.div
          style={{ y: y1 }}
          className="absolute -right-32 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"
        />

        {/* Medium circle - bottom left */}
        <motion.div
          style={{ y: y2 }}
          className="absolute -left-24 bottom-32 h-48 w-48 rounded-full bg-gradient-to-tr from-secondary/10 to-primary/10 blur-2xl"
        />

        {/* Triangle shape - top left */}
        <motion.div
          style={{ y: y3 }}
          className="absolute left-1/4 top-40 h-32 w-32 rotate-45 bg-gradient-to-br from-accent/5 to-secondary/5 blur-xl"
        />

        {/* Small floating orbs */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-1/4 top-1/3 h-24 w-24 rounded-full bg-gradient-to-br from-primary/8 to-accent/8 blur-2xl"
        />

        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 left-1/3 h-20 w-20 rounded-full bg-gradient-to-tr from-secondary/8 to-primary/8 blur-2xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={contentRef as any}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
        >
          {/* Text Content - Left Column */}
          <motion.div variants={slideInLeft} className="flex flex-col justify-center space-y-8">
            {/* Section Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">Our Story</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                The Evolution
              </span>
              <br />
              <span className="text-foreground">of Connection</span>
            </motion.h2>

            {/* Story Content */}
            <motion.div variants={fadeInUp} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="text-foreground/90">
                For over <span className="font-semibold text-primary">25 years</span>, we&apos;ve been the heartbeat of the alternative lifestyle community. What began as SwingLifestyle.com has evolved into something extraordinary—<span className="font-semibold text-accent">Swing.com</span>.
              </p>

              <p>
                As <span className="font-semibold text-primary">the largest swingers website</span> in the world, we&apos;ve connected millions of adventurous individuals, helping them{' '}
                <span className="font-semibold text-accent">ignite connections and fulfill fantasies</span> in a safe, welcoming space.
              </p>

              <p>
                Our transformation represents more than a rebrand—it&apos;s our commitment to{' '}
                <span className="font-semibold text-secondary">craft your most intuitive and accessible online sanctuary</span>. A place where curiosity is celebrated, boundaries are respected, and every connection has the potential to become unforgettable.
              </p>

              <p className="text-foreground/90">
                Welcome to the <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">definitive face of pleasure</span>—where adventurous souls discover, connect, and explore without limits.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <div className="group rounded-2xl border border-primary/20 bg-primary/5 p-4 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/10">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Strong</div>
              </div>

              <div className="group rounded-2xl border border-accent/20 bg-accent/5 p-4 backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-accent/10">
                <div className="text-3xl font-bold text-accent">#1</div>
                <div className="text-sm text-muted-foreground">In the World</div>
              </div>

              <div className="group rounded-2xl border border-secondary/20 bg-secondary/5 p-4 backdrop-blur-sm transition-all hover:border-secondary/40 hover:bg-secondary/10">
                <div className="text-3xl font-bold text-secondary">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element - Right Column */}
          <motion.div
            variants={slideInRight}
            className="relative flex items-center justify-center"
          >
            {/* Glass morphism card */}
            <motion.div
              style={{ scale, opacity }}
              className="relative w-full max-w-lg"
            >
              {/* Main glass card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 p-8 backdrop-blur-xl shadow-2xl">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Icon/Logo placeholder */}
                  <motion.div
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg"
                  >
                    <svg
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </motion.div>

                  {/* Quote */}
                  <blockquote className="space-y-4">
                    <p className="text-2xl font-semibold leading-tight text-foreground">
                      &ldquo;Where adventurous individuals discover their tribe&rdquo;
                    </p>
                    <p className="text-base text-muted-foreground">
                      Join a community that celebrates authenticity, exploration, and meaningful connections in the alternative lifestyle dating world.
                    </p>
                  </blockquote>

                  {/* Decorative elements */}
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex -space-x-3">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.1 + 0.5 }}
                          className="h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent"
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Millions</span> of members worldwide
                    </div>
                  </div>
                </div>

                {/* Floating accent elements */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-2xl"
                />

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-tr from-secondary/30 to-accent/30 blur-2xl"
                />
              </div>

              {/* Outer glow effect */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-3xl" />
            </motion.div>

            {/* Additional floating shapes around the card */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -right-8 top-1/4 h-16 w-16 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm"
            />

            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -left-8 bottom-1/4 h-12 w-12 rounded-full bg-gradient-to-tr from-secondary/10 to-primary/10 backdrop-blur-sm"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
