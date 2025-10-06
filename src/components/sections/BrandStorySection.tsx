'use client';

import { motion } from 'framer-motion';

export function BrandStorySection() {
  return (
    <section id="brand-story" className="relative overflow-hidden py-12 md:py-14 lg:py-16 xl:py-12 2xl:py-16">
      {/* Content Container */}
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid gap-16 md:gap-20 lg:grid-cols-2 lg:gap-24 xl:gap-32 2xl:gap-40">
          {/* Text Content - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Section Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">Our Story</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                A New Era
              </span>
              <br />
              <span className="text-foreground">of Connection</span>
            </h2>

            {/* Story Content - more concise */}
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground/90">
                Formerly known as <span className="font-semibold text-primary">SLS.com</span> and <span className="font-semibold text-primary">Swinglifestyle.com</span>, we&apos;ve acquired the Swing.com domain after over two decades of serving our community. This marks the <span className="font-semibold text-accent">dawn of a new era</span>.
              </p>

              <p>
                We&apos;re creating an <span className="font-semibold text-accent">intuitive and accessible online sanctuary</span> — an Alternative Lifestyle Dating Community for the Adventurous. Experience a <span className="font-semibold text-primary">bold transformation</span> and a <span className="font-semibold text-primary">fresh, unforgettable online experience</span>.
              </p>

              <p>
                A new platform designed to ignite connections, fulfill fantasies, and celebrate the lifestyle in a safe, welcoming space.
              </p>
            </div>

            {/* Stats Grid - simplified */}
            <div className="grid grid-cols-3 gap-6">
              <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 via-background/20 to-background/30 backdrop-blur-md p-6 shadow-[0_0_80px_-12px_rgba(0,0,0,0.5),0_8px_32px_-8px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>

              <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 via-background/20 to-background/30 backdrop-blur-md p-6 shadow-[0_0_80px_-12px_rgba(0,0,0,0.5),0_8px_32px_-8px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                <div className="text-3xl font-bold text-accent">#1</div>
                <div className="text-sm text-muted-foreground">Worldwide</div>
              </div>

              <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 via-background/20 to-background/30 backdrop-blur-md p-6 shadow-[0_0_80px_-12px_rgba(0,0,0,0.5),0_8px_32px_-8px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                <div className="text-3xl font-bold text-secondary">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-end"
          >
            {/* Clean glass card */}
            <div className="relative w-full max-w-lg">
              <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-background/20 to-background/30 backdrop-blur-md p-8 shadow-[0_0_80px_-12px_rgba(0,0,0,0.5),0_8px_32px_-8px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                {/* Content */}
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <svg
                      className="h-8 w-8 text-white"
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
                  </div>

                  {/* Quote */}
                  <blockquote className="space-y-3">
                    <p className="text-xl font-semibold text-foreground">
                      &ldquo;Where desire finds its exquisite new home&rdquo;
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Experience a new era of online connection in our intuitive and accessible sanctuary for the adventurous.
                    </p>
                  </blockquote>

                  {/* Stats */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent"
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Millions</span> of members
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
