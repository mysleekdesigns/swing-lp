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
              <span className="text-black">
                Alternative Lifestyle Dating Community for the Adventurous
              </span>
            </h2>

            {/* Story Content - more concise */}
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground/90">
                You have known and trusted <span className="font-semibold text-primary">SLS.com</span> and <span className="font-semibold text-primary">Swinglifestyle.com</span> as your havens, where desires found their home and thrilling possibilities unfolded. Our journey saw us claim <span className="font-semibold text-primary">SLS.com</span>, a strategic move to provide a more direct whisper to the platform.
              </p>

              <p>
                Now, we proudly announce the culmination of a long-held fantasy: the acquisition of the <span className="font-semibold text-primary">Swing.com</span> domain. Realized after over two decades of passionate pursuit, <span className="font-semibold text-primary">Swing.com</span> embodies the ultimate expression of who we are. It is a name that resonates with pure desire - simple, memorable, and powerful. This transition is our promise to craft your most intuitive and accessible online sanctuary yet.
              </p>

              <p>
                This is beyond a simple address change; it is the dawn of a new era, with <span className="font-semibold text-primary">Swing.com</span> which is the best swingers website boldly stepping forward as the definitive face of pleasure. Prepare for a rush of tantalizing new possibilities and significant advancements that will redefine your online lifestyle journey.
              </p>
            </div>

            {/* Stats Grid - simplified */}
            <div className="grid grid-cols-3 gap-6">
              <div className="rounded-xl border border-primary/40 bg-white p-6 text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>

              <div className="rounded-xl border border-accent/40 bg-white p-6 text-center">
                <div className="text-3xl font-bold text-primary">#1</div>
                <div className="text-sm text-muted-foreground">Worldwide</div>
              </div>

              <div className="rounded-xl border border-secondary/40 bg-white p-6 text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
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
            className="flex items-center justify-center"
          >
            {/* Clean glass card */}
            <div className="relative w-full max-w-lg">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card backdrop-blur-sm p-8">
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
